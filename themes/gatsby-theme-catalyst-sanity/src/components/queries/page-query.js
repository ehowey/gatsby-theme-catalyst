import React from "react"
import { graphql } from "gatsby"
import Page from "../templates/page-template"

const PageQuery = ({ data }) => {
  return <Page data={{ ...data }} />
}

export const query = graphql`
  query SanityPageQuery($id: String!) {
    sanityPage(id: { eq: $id }) {
      id
      title
      _rawBody
    }
  }
`

export default PageQuery
