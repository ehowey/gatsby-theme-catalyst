/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { SanityThemeProvider } from "gatsby-theme-catalyst-sanity"

const ProductPageTemplate = ({ data }) => {
  const product = data.sanityProduct
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={product.name} />
        <Styled.h1>{product.name}</Styled.h1>
      </Layout>
    </SanityThemeProvider>
  )
}

export default ProductPageTemplate
