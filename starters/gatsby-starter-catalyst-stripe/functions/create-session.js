/*
 * This function creates a Stripe Checkout session and returns the session ID
 * for use with Stripe.js (specifically the redirectToCheckout method).
 *
 * @see https://stripe.com/docs/payments/checkout/one-time
 */

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)
const sanityClient = require("@sanity/client")
const dollarsToCents = require("dollars-to-cents")
const stripeConfig = require("../stripe-config")
const validateCartItems = require("use-shopping-cart/src/serverUtil")
  .validateCartItems

// Initialize SANITY client
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
  token: process.env.GATSBY_SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
})

exports.handler = async (event) => {
  try {
    const cartItemsFromWeb = JSON.parse(event.body)
    const arrayFromWeb = Object.values(cartItemsFromWeb)
    const productIdsFromWeb = Object.keys(cartItemsFromWeb)
    const idsForQuery = productIdsFromWeb.map((id) => "'" + id + "'")

    const query = `*[_type == "product" && references(*[_type=="productVariant" && product_id in [${idsForQuery}]]._id)]{..., "purchasedVariants": *[_type == "productVariant" && product_id in [${idsForQuery}]]}`
    const params = {}
    const data = await client.fetch(query, params)
    const productsFromSanity = await Promise.all(
      data
        .map((product) => {
          const onSale = product.sale
          const percentOff = product.salePercent
          const formattedVariants = product.purchasedVariants.map((variant) => {
            const salePrice =
              onSale &&
              percentOff &&
              dollarsToCents(variant.price * ((100 - percentOff) / 100))
            const item = {
              name: variant.name,
              id: variant.product_id,
              price: onSale ? salePrice : dollarsToCents(variant.price),
              currency: stripeConfig.currency,
              stock: variant.stock,
              // image: variant.image,
              product_data: {
                metadata: {
                  variantId: variant.product_id,
                  sanityId: variant._id,
                },
              },
            }
            return item
          })

          return formattedVariants
        })
        .flat()
    )

    const checkStock = (sanityProduct, webProduct) => {
      let stockStatus = []
      webProduct.forEach((element) => {
        const webId = element.id
        const webQuantity = element.quantity
        sanityProduct.forEach((element) => {
          if (element.id === webId && webQuantity <= element.stock) {
            stockStatus.push(true)
          }
        })
      })
      const inStock =
        stockStatus.length > 0 && stockStatus.every((v) => v === true)
      return inStock
    }

    const isStocked = checkStock(productsFromSanity, arrayFromWeb)

    if (!isStocked)
      throw new Error(
        `Attempted to buy a quantity that exceeded available stock.`
      )

    const line_items = validateCartItems(productsFromSanity, cartItemsFromWeb)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: stripeConfig.paymentMethodTypes,
      billing_address_collection: stripeConfig.billingAddressCollection,
      shipping_address_collection: {
        allowed_countries: stripeConfig.allowedCountries,
      },
      mode: stripeConfig.mode,
      success_url: stripeConfig.successUrl,
      cancel_url: stripeConfig.cancelUrl,
      line_items,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.error(error)
  }
}
