import React from "react"
import { graphql } from "gatsby"
import Category from "../../../components/category-template"

const BeryCategoryQuery = ({ data }) => {
  const { sanityCategory } = data
  const category = sanityCategory.title
  const posts = sanityCategory.posts
  return <Category posts={posts} category={category} />
}

export const query = graphql`
  query BeryCategoryQuery($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      description
      posts {
        id
        title
        date
        excerpt
        slug {
          current
        }
      }
    }
  }
`

export default BeryCategoryQuery
