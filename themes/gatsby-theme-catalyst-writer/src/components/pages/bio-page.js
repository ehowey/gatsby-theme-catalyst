/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../page-header"
import SanityContent from "../sanity/sanity-content"

const BioQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityBioPage {
        title
        _rawBody
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

  const topImage = data.sanityBioPage.topimage.asset.fluid
  const topImageAlt = data.sanityBioPage.topimage.alt
  const title = data.sanityBioPage.title
  const body = data.sanityBioPage._rawBody

  return (
    <Fragment>
      <PageHeader topImage={topImage} topImageAlt={topImageAlt} title={title} />
      <SanityContent data={body} />
    </Fragment>
  )
}

export default BioQuery
