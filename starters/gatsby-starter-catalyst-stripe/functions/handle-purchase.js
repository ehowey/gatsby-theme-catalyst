const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

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
      stripe.checkout.sessions.listLineItems(
        id,
        { limit: 100 },
        function (err, lineItems) {
          console.log(err)
          console.log(lineItems.data[0].price)
        }
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
