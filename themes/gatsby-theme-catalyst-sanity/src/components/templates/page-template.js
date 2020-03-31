/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const PageTemplate = ({ data }) => {
  const page = data.sanityPage
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={page.title} />
        <Styled.h1>{page.title}</Styled.h1>
        <SanityContent data={page._rawBody} />
      </Layout>
    </SanityThemeProvider>
  )
}

export default PageTemplate
