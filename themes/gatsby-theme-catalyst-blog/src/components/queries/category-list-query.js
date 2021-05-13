import React from "react"
import { graphql } from "gatsby"
import CategoryList from "../templates/category-list-template"

const CategoryListQuery = ({ data }) => {
  return <CategoryList categories={data.categoryList.group} />
}

export const query = graphql`
  query {
    categoryList: allCatalystPost(
      limit: 1000
      filter: { draft: { ne: true }, published: { eq: true } }
    ) {
      group(field: categories) {
        fieldValue
        totalCount
      }
    }
  }
`

export default CategoryListQuery
