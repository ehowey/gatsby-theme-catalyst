/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { useShoppingCart } from "use-shopping-cart"

const Store = () => {
  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    addItem,
    clearCart,
  } = useShoppingCart()

  const productData = [
    {
      name: "Stick",
      // id: "prod_IlTrxLEvlzlCy5",
      price_id: "price_1I9wtVBd3GPToWTX31Ot8x28",
      price: 1.0,
      image: "https://www.fillmurray.com/300/300",
      currency: "CAD",
      product_data: {
        metadata: {
          type: "fruit",
        },
      },
      price_data: {
        type: "one_time",
      },
    },
    {
      name: "Stone",
      // id: "prod_ImMJJypMKnWTvR",
      price_id: "price_1IAnapBd3GPToWTXZXIAstuI",
      price: 3.0,
      image: "https://www.fillmurray.com/300/300",
      currency: "CAD",
      product_data: {
        metadata: {
          type: "fruit",
        },
      },
      price_data: {
        type: "one_time",
      },
    },
  ]

  return (
    <Layout>
      <SEO title="Store" />
      <Styled.h1>Store</Styled.h1>
      {productData.map((product) => (
        <div key={product.name}>
          <h3>{product.name}</h3>
          <p>{product.price.toString()}</p>
          <button
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to your cart`}
          >
            Add to cart
          </button>
        </div>
      ))}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {totalPrice}</p>
      <button onClick={() => redirectToCheckout()}>Checkout</button>
      <button onClick={() => clearCart()}>Remove all items</button>
    </Layout>
  )
}

export default Store
