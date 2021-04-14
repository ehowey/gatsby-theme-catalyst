import React from "react"
import { graphql } from "gatsby"
import WorkPage from "./work-page"

export default ({ data }) => {
  return <WorkPage data={{ ...data }} />
}

export const query = graphql`
  query SanityWorkPageQuery {
    allSanityWorkPage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
      nodes {
        title
        featuredImage {
          alt
          asset {
            gatsbyImageData(
              width: 900
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
