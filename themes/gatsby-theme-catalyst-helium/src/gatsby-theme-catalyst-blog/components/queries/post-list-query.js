import React from "react"
import { graphql } from "gatsby"
import PostList from "../templates/post-list-template"

export default ({ data }) => {
  const { allCatalystPost } = data
  return <PostList posts={allCatalystPost.nodes} />
}

export const query = graphql`
  query PostsQuery {
    allCatalystPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { draft: { eq: false } }
    ) {
      nodes {
        id
        excerpt
        slug
        title
        author
        authorLink
        date(formatString: "MMMM DD, YYYY")
        tags
        timeToRead
        postType
      }
    }
  }
`
