/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const ProductPageTemplate = ({ data }) => {
  const product = data.sanityProduct
  return (
    <Layout>
      <SEO title={product.name} />
      <Themed.h1>{product.name}</Themed.h1>
    </Layout>
  )
}

export default ProductPageTemplate
