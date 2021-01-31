/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"

const Product = ({ product: propProduct }) => {
  const { redirectToCheckout, addItem } = useShoppingCart()
  const product = propProduct[0]
  const productName = product.productName
  const productImage = product.images[0].asset.fluid
  const productPrice = product.formattedPrice

  const handleBuyNow = async (product) => {
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
    <div>
      <Styled.h3>{productName}</Styled.h3>
      <Img fluid={productImage} sx={{ width: "200px", height: "200px" }} />
      <p>{productPrice}</p>
      <button
        onClick={() => handleBuyNow(product)}
        aria-label={`Buy ${productName} now`}
      >
        Buy now
      </button>
      <button
        onClick={() => addItem(product)}
        aria-label={`Add ${productName} to your cart`}
      >
        Add to cart
      </button>
    </div>
  )
}

export default Product
