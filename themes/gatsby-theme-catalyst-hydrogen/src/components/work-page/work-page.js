/** @jsx jsx */
import { jsx } from "theme-ui"
import PageHeader from "../page-header"
import WorkList from "./work-list"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"

const WorkPage = ({ data }) => {
  const result = data.allSanityWorkPage.nodes[0]
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
        <WorkList />
      </Layout>
    </SanityThemeProvider>
  )
}

export default WorkPage
