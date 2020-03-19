import React from "react"
import { graphql } from "gatsby"
import PostList from "../templates/post-list-template"

export default ({ data }) => {
  return <PostList data={{ ...data }} />
}

export const query = graphql`
  query SanityPostsQuery {
    allSanityPost(sort: { fields: [date, title], order: DESC }) {
      nodes {
        id
        slug {
          current
        }
        title
        date(formatString: "MMMM D, YYYY")
        _rawExcerpt
        author {
          name
          link
        }
        featuredImage {
          alt
          asset {
            fluid(maxHeight: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
