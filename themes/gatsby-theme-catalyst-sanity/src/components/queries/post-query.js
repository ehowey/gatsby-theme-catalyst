import React from "react"
import { graphql } from "gatsby"
import Post from "../templates/post-template"

export default ({ data }) => {
  const { previous, next } = data
  return <Post data={{ ...data }} previous={previous} next={next} />
}

export const query = graphql`
  query SanityPostQuery($id: String!, $previousId: String, $nextId: String) {
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
    previous: sanityPost(id: { eq: $previousId }) {
      id
      excerpt
      slug {
        current
      }
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: sanityPost(id: { eq: $nextId }) {
      id
      excerpt
      slug {
        current
      }
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
