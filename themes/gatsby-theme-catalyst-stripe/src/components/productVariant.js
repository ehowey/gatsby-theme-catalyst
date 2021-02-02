/** @jsx jsx */
import { jsx } from "theme-ui"

const ProductWithVariants = ({ product }) => {
  const productName = product[0].productName
  return (
    <div>
      <p>{productName}</p>
    </div>
  )
}

export default ProductWithVariants
