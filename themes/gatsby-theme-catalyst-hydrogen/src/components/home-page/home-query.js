import React from "react"
import { graphql } from "gatsby"
import HomePage from "./home-page"

export default ({ data }) => {
  return <HomePage data={{ ...data }} />
}

export const query = graphql`
  query SanityHomePageQuery {
    allSanityHomePage(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
      nodes {
        seoTitle
      }
    }
  }
`
