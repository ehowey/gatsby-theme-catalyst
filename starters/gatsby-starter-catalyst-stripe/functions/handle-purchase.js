const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)
const sanityClient = require("@sanity/client")
// Initialize SANITY client
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
  token: process.env.GATSBY_SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
})

exports.handler = async ({ body, headers }) => {
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.GATSBY_STRIPE_WEBHOOK_SECRET
    )

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === "checkout.session.completed") {
      const id = stripeEvent.data.object.id
      const session = await stripe.checkout.sessions.retrieve(id, {
        expand: ["line_items", "line_items.data.price.product"],
      })
      const lineItems = session.line_items
      const sanityData = lineItems.data.map((data) => {
        const formattedData = {
          id: data.price.product.metadata.sanityId,
          quantity: data.quantity,
        }
        return formattedData
      })

      sanityData.forEach((data) =>
        client
          .patch(data.id) // Document ID to patch
          // .set({inStock: false}) // Shallow merge
          .dec({ stock: data.quantity }) // Increment field by count
          .commit() // Perform the patch and return a promise
          // .then((updatedProduct) => {
          //   console.log("Hurray, the product is updated! New document:")
          //   console.log(updatedProduct)
          // })
          .catch((err) => {
            console.error("Oh no, the update failed: ", err.message)
          })
      )
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`)

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
