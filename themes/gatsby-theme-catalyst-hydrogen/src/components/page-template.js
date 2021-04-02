/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import PageHeader from "./page-header"
import { SanityContent, useSanityConfig } from "gatsby-theme-catalyst-sanity"
import { getGatsbyImageData } from "gatsby-source-sanity"

const PageTemplate = ({ data }) => {
  const { sanityConfig } = useSanityConfig()
  const result = data.sanityPage
  const featuredImage = getGatsbyImageData(
    result.featuredImage.asset.id,
    { maxWidth: 1440 },
    sanityConfig
  )
  return (
    <Layout>
      <Seo title={result.title} />
      <PageHeader
        topImage={featuredImage}
        topImageAlt={result.featuredImage.alt}
      />
      <Themed.h1>{result.title}</Themed.h1>
      <SanityContent data={result._rawBody} />
    </Layout>
  )
}

export default PageTemplate