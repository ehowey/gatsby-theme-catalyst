/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import PageHeader from "./page-header"
import { SanityContent } from "gatsby-theme-catalyst-sanity"

const PageTemplate = ({ data }) => {
  const result = data.sanityPage
  return (
    <Layout>
      <Seo title={result.title} />
      <PageHeader
        topImage={result.featuredImage.asset.gatsbyImageData}
        topImageAlt={result.featuredImage.alt}
      />
      <Themed.h1>{result.title}</Themed.h1>
      <SanityContent data={result._rawBody} />
    </Layout>
  )
}

export default PageTemplate
