/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../page-header"
import SelectedWork from "../selected-work"
import { SEO } from "gatsby-theme-catalyst-core"

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityWorkPage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
        nodes {
          seoTitle
          title
          topimage {
            alt
            asset {
              fluid(maxHeight: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  const result = data.allSanityWorkPage.nodes[0]

  return (
    <Fragment>
      <SEO title={result.seoTitle} />
      <PageHeader
        topImage={result.topimage.asset.fluid}
        topImageAlt={result.topimage.alt}
        title={result.title}
      />
      <SelectedWork />
    </Fragment>
  )
}

export default WorkPage
