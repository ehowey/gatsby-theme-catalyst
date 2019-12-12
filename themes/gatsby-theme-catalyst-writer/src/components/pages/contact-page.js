/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../page-header"
import SanityContent from "../sanity/sanity-content"
import { SEO } from "gatsby-theme-catalyst-core"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityContactPage {
        title
        seoTitle
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

  const result = data.sanityContactPage

  return (
    <Fragment>
      <SEO title={result.seoTitle} />
      <PageHeader
        topImage={result.topimage.asset.fluid}
        topImageAlt={result.topimage.alt}
        title={result.title}
      />
      <SanityContent data={result._rawBody} />
    </Fragment>
  )
}

export default ContactPage
