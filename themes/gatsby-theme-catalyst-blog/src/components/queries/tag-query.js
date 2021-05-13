import React from "react"
import { graphql } from "gatsby"
import Tag from "../templates/tag-template"

const TagQuery = ({ data, pageContext }) => {
  const { allCatalystPost } = data
  const tag = pageContext.tag
  return <Tag posts={allCatalystPost.nodes} tag={tag} />
}

export const query = graphql`
  query($tag: String) {
    allCatalystPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { published: { eq: true }, tags: { in: [$tag] } }
    ) {
      nodes {
        id
        excerpt
        slug
        title
        subTitle
        author
        authorLink
        date(formatString: "MMMM DD, YYYY")
        tags
        categories
        timeToRead
        postType
      }
    }
  }
`

export default TagQuery
