/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import SanityContent from "../sanity/sanity-content"

const PageTemplate = ({ data }) => {
  const page = data.sanityPage
  return (
    <Layout>
      <SEO title={page.title} />
      <Styled.h1>{page.title}</Styled.h1>
      <SanityContent data={page._rawBody} />
    </Layout>
  )
}

export default PageTemplate
