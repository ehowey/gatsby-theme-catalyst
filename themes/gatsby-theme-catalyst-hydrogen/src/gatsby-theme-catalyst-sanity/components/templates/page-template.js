/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import PageHeader from "../../../components/page-header"
import { SanityContent, sanityTheme } from "gatsby-theme-catalyst-sanity"

const PageTemplate = ({ data }) => {
  const result = data.sanityPage
  return (
    <ThemeProvider theme={sanityTheme}>
      <Layout>
        <SEO title={result.title} />
        <PageHeader
          topImage={result.featuredImage.asset.fluid}
          topImageAlt={result.featuredImage.alt}
          title={result.title}
        />
        <SanityContent data={result._rawBody} />
      </Layout>
    </ThemeProvider>
  )
}

export default PageTemplate
