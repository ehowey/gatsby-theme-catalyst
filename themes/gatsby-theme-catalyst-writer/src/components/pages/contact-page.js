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
      allSanityContactPage(
        limit: 1
        sort: { fields: _updatedAt, order: DESC }
      ) {
        nodes {
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
    }
  `)

  const result = data.allSanityContactPage.nodes[0]

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
