import React from "react"
import { graphql } from "gatsby"
import ProductPage from "../templates/productPage-template"

export default ({ data }) => {
  return <ProductPage data={{ ...data }} />
}

export const query = graphql`
  query SanityProductQuery($id: String!) {
    sanityProduct(id: { eq: $id }) {
      id
      name
    }
  }
`
