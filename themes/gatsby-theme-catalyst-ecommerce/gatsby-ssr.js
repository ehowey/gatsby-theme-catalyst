import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

export const wrapRootElement = ({ element }, themeOptions) => {
  const {
    stripePublicKey,
    successUrl,
    cancelUrl,
    currency,
    allowedCountries,
    billingAddressCollection,
  } = themeOptions

  const stripePromise = loadStripe(stripePublicKey)

  return (
    <CartProvider
      mode="checkout-session"
      stripe={stripePromise}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency={currency}
      allowedCountries={allowedCountries}
      billingAddressCollection={billingAddressCollection}
    >
      {element}
    </CartProvider>
  )
}
