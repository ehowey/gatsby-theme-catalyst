/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import IndividualProduct from "./productIndividual"
import ProductWithVariants from "./productVariant"
import { formatProduct } from "../utils/formatProduct"

const Product = ({ product }) => {
  const formattedProduct = formatProduct(product)
  const hasVariants = formattedProduct.length > 1
  return (
    <Fragment>
      {hasVariants ? (
        <ProductWithVariants product={formattedProduct} />
      ) : (
        <IndividualProduct product={formattedProduct} />
      )}
    </Fragment>
  )
}

export default Product
