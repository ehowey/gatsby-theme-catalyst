/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import sanityClient from "@sanity/client"

const Product = ({ product }) => {
  const { redirectToCheckout, addItem } = useShoppingCart()
  const productName = product.name
  const productImage = product.variants[0].images[0].asset.fluid
  const productPrice = product.variants[0].formattedPrice
  const regularPrice = product.variants[0].regularPrice
  const sanityId = product.variants[0].sanityId
  const onSale = product.sale

  console.log(onSale)

  // Initialize SANITY client. Requires a public dataset. Private would have be handled in a Netlify Function.
  const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
    useCdn: false, // `false` if you want to ensure fresh data
  })

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
    setQuantity(parseInt(event.target.value))
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
    <div sx={{ border: "1px #aaa solid", p: 3, my: 3 }}>
      <Styled.h3>{productName}</Styled.h3>
      <Img fluid={productImage} sx={{ width: "200px", height: "200px" }} />
      <p>{stockStatus}</p>
      {onSale && <p>SALE!</p>}
      <p>
        {onSale && (
          <span sx={{ textDecoration: "line-through", mr: 1 }}>
            {regularPrice}
          </span>
        )}
        {productPrice}
      </p>
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
