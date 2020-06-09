import React from "react"
import { graphql } from "gatsby"
import PostList from "../templates/post-list-template"

export default ({ data }) => {
  const { allCatalystPost } = data
  return <PostList posts={allCatalystPost.nodes} />
}

export const query = graphql`
  query {
    allCatalystPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { draft: { eq: false } }
    ) {
      nodes {
        id
        excerpt
        body
        slug
        title
        subTitle
        author
        authorLink
        tags
        categories
        keywords
        postType
        timeToRead
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
