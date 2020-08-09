import React from "react"
import { graphql } from "gatsby"
import Post from "../../../components/post-template"

export default ({ data }) => {
  return <Post data={{ ...data }} />
}

export const query = graphql`
  query BeryPost($id: String!) {
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
      readingTimeInMinutes
      featuredImage {
        caption
        asset {
          fluid(maxWidth: 1440) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
  }
`
