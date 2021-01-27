import React from "react"
import { graphql } from "gatsby"
import Store from "../templates/store-template"

export default ({ data }) => {
  return <Store data={{ ...data }} />
}

export const query = graphql`
  {
    allSanityProduct {
      nodes {
        name
        id
        _id
        price
        description
        categories {
          title
          slug {
            current
          }
        }
        image {
          asset {
            fluid(maxWidth: 1024) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`
