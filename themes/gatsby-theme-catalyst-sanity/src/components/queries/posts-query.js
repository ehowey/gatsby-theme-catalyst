import React from "react"
import { graphql } from "gatsby"
import Posts from "../templates/posts-template"

export default ({ data }) => {
  return <Posts data={{ ...data }} />
}

export const query = graphql`
  query SanityPostsQuery {
    allSanityPost {
      nodes {
        id
        title
        _rawBody
      }
    }
  }
`
