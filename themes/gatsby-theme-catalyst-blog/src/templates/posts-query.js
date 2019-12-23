import React from "react"
import { graphql } from "gatsby"
import PostsList from "../components/posts-list"

export default ({ data }) => {
  const { allCatalystPost } = data
  return <PostsList posts={allCatalystPost.edges} />
}

export const query = graphql`
  query PostsQuery {
    allCatalystPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          author
          date(formatString: "MMMM DD, YYYY")
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
