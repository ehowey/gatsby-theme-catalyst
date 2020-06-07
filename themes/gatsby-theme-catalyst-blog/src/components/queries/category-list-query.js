import React from "react"
import { graphql } from "gatsby"
import CategoryList from "../templates/category-list-template"

export default ({ data }) => {
  return <CategoryList categories={data.categoryList.group} />
}

export const query = graphql`
  query {
    categoryList: allCatalystPost(
      limit: 1000
      filter: { draft: { eq: false } }
    ) {
      group(field: categories) {
        fieldValue
        totalCount
      }
    }
  }
`
