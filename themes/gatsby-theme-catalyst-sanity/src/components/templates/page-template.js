/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import SanityContent from "../sanity/sanity-content"
import sanityTheme from "../sanity/theme"

const PageTemplate = ({ data }) => {
  const page = data.sanityPage
  return (
    <ThemeProvider theme={sanityTheme}>
      <Layout>
        <SEO title={page.title} />
        <Styled.h1>{page.title}</Styled.h1>
        <SanityContent data={page._rawBody} />
      </Layout>
    </ThemeProvider>
  )
}

export default PageTemplate
