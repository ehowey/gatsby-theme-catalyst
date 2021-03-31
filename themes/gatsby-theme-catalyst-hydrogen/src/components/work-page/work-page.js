/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import PageHeader from "../page-header"
import WorkList from "./work-list"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import { SanityContent } from "gatsby-theme-catalyst-sanity"

const WorkPage = ({ data }) => {
  const result = data.allSanityWorkPage.nodes[0]
  return (
    <Layout>
      <Seo title={result.title} />
      <PageHeader
        topImage={result.featuredImage.asset.gatsbyImageData}
        topImageAlt={result.featuredImage.alt}
      />
      <Themed.h1>{result.title}</Themed.h1>

      <SanityContent data={result._rawBody} />
      <WorkList />
    </Layout>
  )
}

export default WorkPage
