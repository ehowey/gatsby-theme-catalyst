import React from "react"
import { graphql } from "gatsby"
import Category from "../templates/productCategory-template"

export default ({ data }) => {
  return <Category data={{ ...data }} />
}

export const query = graphql`
  query ProductCategoryQuery($id: String!) {
    sanityProductCategory(id: { eq: $id }) {
      title
      description
    }
  }
`
