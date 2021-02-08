/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { SanityThemeProvider } from "gatsby-theme-catalyst-sanity"

const ProductTemplate = ({ data }) => {
  const category = data.sanityProductCategory
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={category.title} />
        <Styled.h1>{category.title}</Styled.h1>
      </Layout>
    </SanityThemeProvider>
  )
}

export default ProductTemplate
