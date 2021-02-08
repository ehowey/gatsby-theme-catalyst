/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const ProductPageTemplate = ({ data }) => {
  const product = data.sanityProduct
  return (
    <Layout>
      <SEO title={product.name} />
      <Styled.h1>{product.name}</Styled.h1>
    </Layout>
  )
}

export default ProductPageTemplate
