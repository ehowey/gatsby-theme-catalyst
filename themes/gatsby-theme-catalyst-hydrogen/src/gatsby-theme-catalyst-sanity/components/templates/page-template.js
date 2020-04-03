/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import PageHeader from "../../../components/page-header"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const PageTemplate = ({ data }) => {
  const result = data.sanityPage
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={result.title} />
        <PageHeader
          topImage={result.featuredImage.asset.fluid}
          topImageAlt={result.featuredImage.alt}
          title={result.title}
        />
        <SanityContent data={result._rawBody} />
      </Layout>
    </SanityThemeProvider>
  )
}

export default PageTemplate
