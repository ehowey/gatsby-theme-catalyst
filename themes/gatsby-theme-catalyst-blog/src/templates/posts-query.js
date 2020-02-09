import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/post-list"

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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
