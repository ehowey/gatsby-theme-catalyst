/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import sanityClient from "@sanity/client"

const Product = ({ product: propProduct }) => {
  const { redirectToCheckout, addItem } = useShoppingCart()
  const product = propProduct[0]
  const productName = product.productName
  const productImage = product.images[0].asset.fluid
  const productPrice = product.formattedPrice
  const sanityId = product.sanityId

  // Initialize SANITY client
  const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
    token: process.env.GATSBY_SANITY_TOKEN,
    useCdn: false, // `false` if you want to ensure fresh data
  })

  console.log(product)

  const [quantity, setQuantity] = useState(1)
  const [stockStatus, setStockStatus] = useState("Checking stock...")

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

  useEffect(() => {
    const query = `*[_id == "${sanityId}"] {stock}`
    const params = {}
    client.fetch(query, params).then((prod) => {
      if (prod[0].stock !== 0) {
        setStockStatus("In stock")
      }
      if (prod[0].stock === 0) {
        setStockStatus("Out of stock")
      }
    })
  }, [])

  return (
    <div>
      <Themed.h3>{productName}</Themed.h3>
      <Img fluid={productImage} sx={{ width: "200px", height: "200px" }} />
      <p>{stockStatus}</p>
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
