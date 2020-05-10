import React from "react"
import { graphql } from "gatsby"
import PostList from "../../../components/post-list"

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
        slug
        title
        subTitle
        author
        authorLink
        date(formatString: "MMMM D, YYYY")
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
