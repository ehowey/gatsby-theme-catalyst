require("dotenv").config()

module.exports = {
  stripePublicKey: process.env.GATSBY_STRIPE_PUBLIC_KEY,
  checkoutMode: "checkout_session",
  successUrl: "https://www.google.com",
  cancelUrl: "https://www.erichowey.dev",
  currency: "CAD",
  allowedCountries: ["US", "CA"],
  billingAddressCollection: "auto",
  mode: "payment",
  paymentMethodTypes: ["card"],
}
