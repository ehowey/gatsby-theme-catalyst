/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const ProductTemplate = ({ data }) => {
  const category = data.sanityProductCategory
  return (
    <Layout>
      <SEO title={category.title} />
      <Styled.h1>{category.title}</Styled.h1>
    </Layout>
  )
}

export default ProductTemplate
