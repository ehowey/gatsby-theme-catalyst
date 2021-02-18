import React from "react"
import { graphql } from "gatsby"
import PostList from "../templates/post-list-template"

const PostListQuery = ({ data }) => {
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
        excerpt(limit: 200)
      }
    }
  }
`

export default PostListQuery
