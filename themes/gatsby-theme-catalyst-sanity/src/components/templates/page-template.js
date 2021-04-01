/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import { SanityContent } from "gatsby-theme-catalyst-sanity"

const PageTemplate = ({ data }) => {
  const page = data.sanityPage
  return (
    <Layout>
      <Seo title={page.title} />
      <Themed.h1>{page.title}</Themed.h1>
      <SanityContent data={page._rawBody} />
    </Layout>
  )
}

export default PageTemplate
