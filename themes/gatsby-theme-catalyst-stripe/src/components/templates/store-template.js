/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import Img from "gatsby-image"
import dollarsToCents from "dollars-to-cents"

const Store = ({ data }) => {
  const {
    redirectToCheckout,
    cartCount,
    addItem,
    clearCart,
    cartDetails,
    formattedTotalPrice,
  } = useShoppingCart()

  const productData = data.allSanityProduct.nodes.map((product) => {
    const formattedProduct = {
      name: product.name,
      id: product._id,
      currency: "CAD",
      price: dollarsToCents(product.price),
      formattedPrice: formatCurrencyString({
        value: dollarsToCents(product.price),
        currency: "CAD",
      }),
      image: product.image.asset.fluid,
      product_data: {
        metadata: {
          sanityId: product._id,
        },
      },
    }
    return formattedProduct
  })

  const handleCheckout = async (event) => {
    event.preventDefault()

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => {
        return res.json()
      })
      .catch((error) => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
  }

  const handleBuyNow = async (product) => {
    console.log(product)
    // event.preventDefault()

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [product.id]: { ...product, quantity: 1 } }),
    })
      .then((res) => {
        return res.json()
      })
      .catch((error) => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
  }

  return (
    <Layout>
      <SEO title="Store" />
      <Styled.h1>Store</Styled.h1>
      {productData.map((product) => (
        <div key={product.name}>
          <h3>{product.name}</h3>
          <Img fluid={product.image} sx={{ width: "200px", height: "200px" }} />
          <p>{product.formattedPrice}</p>
          <button
            onClick={() => handleBuyNow(product)}
            aria-label={`Buy ${product.name} now`}
          >
            Buy now
          </button>
          <button
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to your cart`}
          >
            Add to cart
          </button>
        </div>
      ))}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={() => clearCart()}>Remove all items</button>
    </Layout>
  )
}

export default Store
