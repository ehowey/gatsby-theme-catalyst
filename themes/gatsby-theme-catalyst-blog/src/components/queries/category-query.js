import React from "react"
import { graphql } from "gatsby"
import Category from "../templates/category-template"

const CategoryQuery = ({ data, pageContext }) => {
  const { allCatalystPost } = data
  const category = pageContext.category
  return <Category posts={allCatalystPost.nodes} category={category} />
}

export const query = graphql`
  query($category: String) {
    allCatalystPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { published: { eq: true }, categories: { in: [$category] } }
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

export default CategoryQuery
