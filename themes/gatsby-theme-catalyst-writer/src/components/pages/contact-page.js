/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SEO } from "gatsby-theme-catalyst-core"
import PageHeader from "../page-header"
import SanityContent from "../sanity/sanity-content"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityContactPage {
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

  const topImage = data.sanityContactPage.topimage.asset.fluid
  const topImageAlt = data.sanityContactPage.topimage.alt
  const title = data.sanityContactPage.title
  const body = data.sanityContactPage._rawBody

  return (
    <Fragment>
      <SEO title={title} />
      <PageHeader topImage={topImage} topImageAlt={topImageAlt} title={title} />
      <SanityContent data={body} />
    </Fragment>
  )
}

export default ContactPage
