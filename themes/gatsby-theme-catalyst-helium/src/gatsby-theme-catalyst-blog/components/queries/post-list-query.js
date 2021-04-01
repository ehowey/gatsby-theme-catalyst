import React from "react"
import { graphql } from "gatsby"
import PostList from "../../../components/post-list"

const HeliumPostListQuery = ({ data }) => {
  const { allCatalystPost } = data
  return <PostList posts={allCatalystPost.nodes} />
}

export const query = graphql`{
  allCatalystPost(
    sort: {fields: [date, title], order: DESC}
    limit: 1000
    filter: {draft: {eq: false}}
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
      categories
      timeToRead
      featuredImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`

export default HeliumPostListQuery
