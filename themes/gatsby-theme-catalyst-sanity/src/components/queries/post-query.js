import React from "react"
import { graphql } from "gatsby"
import Post from "../templates/post-template"

export default ({ data }) => {
  return <Post data={{ ...data }} />
}

export const query = graphql`
  query SanityPostQuery($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMMM D, YYYY")
      categories {
        title
        slug {
          current
        }
      }
      _rawBody
    }
  }
`
