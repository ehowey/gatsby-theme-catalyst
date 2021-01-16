import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

export const wrapRootElement = ({ element }, themeOptions) => {
  const { stripePublicApi } = themeOptions
  const stripePromise = loadStripe(stripePublicApi)

  return (
    <CartProvider
      stripe={stripePromise}
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="USD"
      allowedCountries={["US", "GB", "CA"]}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  )
}
