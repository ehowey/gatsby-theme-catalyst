import React from "react"
import { graphql } from "gatsby"
import Page from "../../../components/page-template"

const HydrogenPageQuery = ({ data }) => {
  return <Page data={{ ...data }} />
}

export const query = graphql`
  query SanityHydrogenPageQuery($id: String!) {
    sanityPage(id: { eq: $id }) {
      id
      title
      _rawBody
      featuredImage {
        alt
        asset {
          id
        }
      }
    }
  }
`

export default HydrogenPageQuery
