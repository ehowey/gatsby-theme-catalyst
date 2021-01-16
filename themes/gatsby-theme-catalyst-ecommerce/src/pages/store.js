/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { useShoppingCart } from "use-shopping-cart"

const Store = () => {
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <Layout>
      <SEO title="Store" />
      <Styled.h1>Store</Styled.h1>
      <p>Number of Items: {cartCount}</p>
      <p>Total: {totalPrice}</p>
      <button onClick={() => redirectToCheckout()}>Checkout</button>
    </Layout>
  )
}

export default Store
