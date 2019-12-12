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
      sanityWorkPage {
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
  `)

  const result = data.sanityWorkPage

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
