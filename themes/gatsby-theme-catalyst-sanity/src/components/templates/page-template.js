/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { ThemeProvider } from "theme-ui"
import SanityContent from "../sanity/sanity-content"
import theme from "../sanity/theme.js"

const PageTemplate = ({ data }) => {
  const page = data.sanityPage
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={page.title} />
        <Styled.h1>{page.title}</Styled.h1>
        <SanityContent data={page._rawBody} />
      </Layout>
    </ThemeProvider>
  )
}

export default PageTemplate
