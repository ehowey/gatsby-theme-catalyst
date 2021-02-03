/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useShoppingCart } from "use-shopping-cart"
import sanityClient from "@sanity/client"

const ProductWithVariant = ({ product }) => {
  const { redirectToCheckout, addItem } = useShoppingCart()

  // Initialize SANITY client. Requires a public dataset. Private would have be handled in a Netlify Function.
  const client = sanityClient({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
    useCdn: false, // `false` if you want to ensure fresh data
  })

  const [quantity, setQuantity] = useState(1)
  const [stockStatus, setStockStatus] = useState("Checking stock...")
  const [activeProduct, setActiveProduct] = useState(product[0])

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
    addItem(activeProduct, quantity)
  }

  const handleQuantity = (event) => {
    setQuantity(event.target.value)
  }

  const handleVariant = (event) => {
    const filteredProduct = product.filter(
      (variant) => variant.id === event.target.value
    )
    setActiveProduct(filteredProduct[0])
  }

  useEffect(() => {
    const query = `*[_id == "${activeProduct.sanityId}"] {stock}`
    const params = {}
    client.fetch(query, params).then((prod) => {
      if (prod[0].stock !== 0) {
        setStockStatus("In stock")
      }
      if (prod[0].stock === 0) {
        setStockStatus("Out of stock")
      }
    })
  }, [activeProduct])

  return (
    <div sx={{ border: "1px #aaa solid", p: 3, my: 3 }}>
      <Styled.h3>{activeProduct.productName}</Styled.h3>
      <Img
        fluid={activeProduct.images[0].asset.fluid}
        sx={{ width: "200px", height: "200px" }}
      />
      <p>{stockStatus}</p>
      <p>{activeProduct.formattedPrice}</p>
      <p>
        Quantity
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
      <p>
        {product[0].variantTitle}
        <select onChange={handleVariant}>
          {product.map((variant) => (
            <option value={variant.id} key={variant.id}>
              {variant.variantName}
            </option>
          ))}
        </select>
      </p>
      <button
        type="button"
        onClick={() => handleBuyNow(activeProduct)}
        aria-label={`Buy ${activeProduct.productName} now`}
      >
        Buy now
      </button>
      <button
        type="submit"
        onClick={handleAddItem}
        aria-label={`Add ${activeProduct.productName} to your cart`}
      >
        Add to cart
      </button>
    </div>
  )
}

export default ProductWithVariant
