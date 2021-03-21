/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const ProductTemplate = ({ data }) => {
  const category = data.sanityProductCategory
  return (
    <Layout>
      <SEO title={category.title} />
      <Themed.h1>{category.title}</Themed.h1>
    </Layout>
  )
}

export default ProductTemplate
