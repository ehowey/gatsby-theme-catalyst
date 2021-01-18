import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

export const wrapRootElement = ({ element }, themeOptions) => {
  const { stripePublicKey } = themeOptions
  const stripePromise = loadStripe(stripePublicKey)

  return (
    <CartProvider
      mode="checkout-session"
      stripe={stripePromise}
      successUrl="https://www.erichowey.dev"
      cancelUrl="https://www.google.com"
      currency="CAD"
      allowedCountries={["US", "CA"]}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  )
}
