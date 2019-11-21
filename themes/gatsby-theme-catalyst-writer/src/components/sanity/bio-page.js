/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PortableText from "@sanity/block-content-to-react"
import clientConfig from "./client-config"
import serializers from "./serializers"

const BioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityBioPage(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
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
    }
  `)

  const pageData = data.allSanityBioPage.nodes
  console.log(process.env)

  return (
    <Fragment>
      {pageData.map(page => (
        <Fragment key={page.title}>
          <Img
            sx={{
              height: ["150px", "200px", null, null, null],
            }}
            fluid={page.topimage.asset.fluid}
            alt={page.topimage.alt}
          />
          <Styled.h1>{page.title}</Styled.h1>
          <PortableText
            blocks={page._rawBody}
            serializers={serializers}
            {...clientConfig.sanity}
          />
        </Fragment>
      ))}
    </Fragment>
  )
}

export default BioPage
