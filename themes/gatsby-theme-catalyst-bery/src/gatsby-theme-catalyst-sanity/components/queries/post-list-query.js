import React from "react"
import { graphql } from "gatsby"
import PostList from "../../../components/post-list-template"

export default ({ data }) => {
  return <PostList data={{ ...data }} />
}

export const query = graphql`
  query BeryPostsQuery {
    allSanityPost(sort: { fields: [date, title], order: DESC }) {
      nodes {
        id
        slug {
          current
        }
        title
        date(formatString: "MMMM D, YYYY")
        excerpt(limit: 200)
        readingTimeInMinutes
        featuredImage {
          caption
          asset {
            fluid(maxWidth: 1440) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
