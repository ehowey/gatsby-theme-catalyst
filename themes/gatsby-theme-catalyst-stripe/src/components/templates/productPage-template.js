/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Seo, Layout } from "gatsby-theme-catalyst-core"

const ProductPageTemplate = ({ data }) => {
  const product = data.sanityProduct
  return (
    <Layout>
      <Seo title={product.name} />
      <Themed.h1>{product.name}</Themed.h1>
    </Layout>
  )
}

export default ProductPageTemplate
