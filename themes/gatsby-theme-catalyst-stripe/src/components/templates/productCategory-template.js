/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Seo, Layout } from "gatsby-theme-catalyst-core"

const ProductTemplate = ({ data }) => {
  const category = data.sanityProductCategory
  return (
    <Layout>
      <Seo title={category.title} />
      <Themed.h1>{category.title}</Themed.h1>
    </Layout>
  )
}

export default ProductTemplate
