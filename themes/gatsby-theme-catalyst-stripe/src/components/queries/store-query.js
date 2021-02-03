import React from "react"
import { graphql } from "gatsby"
import Store from "../templates/store-template"

export default ({ data }) => {
  return <Store data={{ ...data }} />
}

export const query = graphql`
  {
    allSanityProduct(filter: { active: { eq: true } }) {
      nodes {
        _id
        id
        name
        active
        featured
        description
        variantTitle
        excerpt(limit: 180)
        categories {
          title
          slug {
            current
          }
        }
        variants {
          _id
          name
          displayedName
          price
          product_id
          stock
          taxable
          images {
            asset {
              fluid(maxWidth: 1024) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
