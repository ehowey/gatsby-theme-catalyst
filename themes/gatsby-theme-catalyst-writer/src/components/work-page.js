/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "./page-header"

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
    <PageHeader topImage={topImage} topImageAlt={topImageAlt} title={title} />
  )
}

export default WorkPage
