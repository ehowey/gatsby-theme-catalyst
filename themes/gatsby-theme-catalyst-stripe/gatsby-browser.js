import React from "react"
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

  return (
    <CartProvider
      mode="checkout-session"
      stripe={stripePublicKey}
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
