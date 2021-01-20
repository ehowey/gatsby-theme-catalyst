import React from "react"
import { graphql } from "gatsby"
import Product from "../templates/product-template"

export default ({ data }) => {
  return <Product data={{ ...data }} />
}

export const query = graphql`
  query SanityProductQuery($id: String!) {
    sanityProduct(id: { eq: $id }) {
      id
      name
    }
  }
`
