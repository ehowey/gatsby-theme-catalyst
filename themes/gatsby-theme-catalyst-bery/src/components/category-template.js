/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const CategoryTemplate = () => {
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title="catgeory" />
        <Styled.h1>Category Template</Styled.h1>
        <Styled.p>Hello World</Styled.p>
      </Layout>
    </SanityThemeProvider>
  )
}

export default CategoryTemplate
