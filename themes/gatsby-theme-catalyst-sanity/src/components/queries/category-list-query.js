import React from "react"
import { graphql } from "gatsby"
import CategoryList from "../templates/category-list-template"

const CategoryListQuery = ({ data }) => {
  const categories = data.allSanityCategory.nodes
  return <CategoryList categories={categories} />
}

export const query = graphql`
  query CategoryListQuery {
    allSanityCategory {
      nodes {
        slug {
          current
        }
        title
        id
      }
    }
  }
`

export default CategoryListQuery
