/*
 * This function creates a Stripe Checkout session and returns the session ID
 * for use with Stripe.js (specifically the redirectToCheckout method).
 *
 * @see https://stripe.com/docs/payments/checkout/one-time
 */

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)
const sanityClient = require("@sanity/client")
const dollarsToCents = require("dollars-to-cents")
const validateCartItems = require("use-shopping-cart/src/serverUtil")
  .validateCartItems

// Initialize SANITY client
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
  // token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
})
const query = '*[_type == "product"]{"image": image.asset->url, ...}'
const params = {}

exports.handler = async (event) => {
  try {
    const data = await client.fetch(query, params)
    const productsFromSanity = await Promise.all(
      data.map((product) => {
        const formattedProduct = {
          name: product.name,
          id: product.slug.current,
          price: dollarsToCents(product.price),
          currency: process.env.GATSBY_STRIPE_CURRENCY,
          image: product.image,
        }
        return formattedProduct
      })
    )
    const cartItemsFromWeb = JSON.parse(event.body)
    const line_items = validateCartItems(productsFromSanity, cartItemsFromWeb)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      mode: "payment",
      success_url: `https://www.erichowey.dev`,
      cancel_url: `https://www.google.com`,
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
