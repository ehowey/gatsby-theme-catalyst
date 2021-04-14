import React from "react"
import { graphql } from "gatsby"
import PostList from "../../../components/post-list-template"

const BeryPostListQuery = ({ data }) => {
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
        categories {
          title
          slug {
            current
          }
        }
        excerpt(limit: 200)
        readingTimeInMinutes
        featuredImage {
          caption
          asset {
            gatsbyImageData
          }
        }
      }
    }
    allSanityCategory {
      distinct(field: title)
    }
  }
`

export default BeryPostListQuery
