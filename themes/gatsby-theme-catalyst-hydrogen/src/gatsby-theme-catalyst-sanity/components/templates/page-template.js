/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import PageHeader from "../../../components/page-header"
import { SanityContent } from "gatsby-theme-catalyst-sanity"

const PageTemplate = ({ data }) => {
  const result = data.sanityPage
  return (
    <Layout>
      <SEO title={result.title} />
      <PageHeader
        topImage={result.featuredImage.asset.gatsbyImageData}
        topImageAlt={result.featuredImage.alt}
        title={result.title}
      />
      <SanityContent data={result._rawBody} />
    </Layout>
  )
}

export default PageTemplate
