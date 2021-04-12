/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { SanityThemeProvider } from "gatsby-theme-catalyst-sanity"

const ProductTemplate = ({ data }) => {
  const category = data.sanityProductCategory
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={category.title} />
        <Themed.h1>{category.title}</Themed.h1>
      </Layout>
    </SanityThemeProvider>
  )
}

export default ProductTemplate
