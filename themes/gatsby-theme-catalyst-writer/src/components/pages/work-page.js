/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SEO } from "gatsby-theme-catalyst-core"
import PageHeader from "../page-header"
import SelectedWork from "../selected-work"

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityWorkPage {
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

  const topImage = data.sanityWorkPage.topimage.asset.fluid
  const topImageAlt = data.sanityWorkPage.topimage.alt
  const title = data.sanityWorkPage.title

  return (
    <Fragment>
      <SEO title={title} />
      <PageHeader topImage={topImage} topImageAlt={topImageAlt} title={title} />
      <SelectedWork />
    </Fragment>
  )
}

export default WorkPage
