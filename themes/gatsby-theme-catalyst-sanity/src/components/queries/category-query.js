import React from "react"
import { graphql } from "gatsby"
import Category from "../templates/category-template"

export default ({ data }) => {
  const { sanityCategory } = data
  const category = sanityCategory.title
  const posts = sanityCategory.posts
  return <Category posts={posts} category={category} />
}

export const query = graphql`
  query CategoryQuery($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      description
      posts {
        id
        excerpt
        title
        date(formatString: "MMMM D, YYYY")
        slug {
          current
        }
      }
    }
  }
`
