/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { useShoppingCart } from "use-shopping-cart"
import { useStaticQuery, graphql } from "gatsby"

const Store = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProduct {
        nodes {
          name
          id
          price
          currency
          sanityId
        }
      }
    }
  `)

  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    addItem,
    clearCart,
    cartDetails,
  } = useShoppingCart()

  const productData = data.allSanityProduct.nodes.map((product) => {
    const x = {
      name: product.name,
      id: product.sanityId,
      currency: product.currency,
      price: product.price,
    }
    return x
  })

  const handleCheckout = async (event) => {
    event.preventDefault()

    const response = await fetch(
      "/.netlify/starters/gatsby-starter-catalyst-ecommerce/functions/create-session",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartDetails),
      }
    )
      .then((res) => {
        return res
      })
      .catch((error) => console.log(error))

    console.log(response.body)
    // redirectToCheckout({ sessionId: response.sessionId })
  }

  console.log(cartDetails)

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
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={() => clearCart()}>Remove all items</button>
    </Layout>
  )
}

export default Store
