/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"

const Product = ({ product: propProduct }) => {
  const { redirectToCheckout, addItem } = useShoppingCart()
  const product = propProduct[0]
  const productName = product.productName
  const productImage = product.images[0].asset.fluid
  const productPrice = product.formattedPrice

  const [quantity, setQuantity] = useState(1)

  const handleBuyNow = async (product) => {
    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [product.id]: { ...product, quantity: quantity },
      }),
    })
      .then((res) => {
        return res.json()
      })
      .catch((error) => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
  }

  const handleAddItem = () => {
    addItem(product, quantity)
  }

  const handleQuantity = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <div>
      <Styled.h3>{productName}</Styled.h3>
      <Img fluid={productImage} sx={{ width: "200px", height: "200px" }} />
      <p>{productPrice}</p>
      <p>
        Select Quantity
        <select onChange={handleQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </p>
      <button
        type="button"
        onClick={() => handleBuyNow(product)}
        aria-label={`Buy ${productName} now`}
      >
        Buy now
      </button>
      <button
        type="submit"
        onClick={handleAddItem}
        aria-label={`Add ${productName} to your cart`}
      >
        Add to cart
      </button>
    </div>
  )
}

export default Product
