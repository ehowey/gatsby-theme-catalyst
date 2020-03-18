import React from "react"
import { graphql } from "gatsby"
import Projects from "../templates/projects-template"

export default ({ data }) => {
  return <Projects data={{ ...data }} />
}

export const query = graphql`
  query SanityProjectsQuery {
    allSanityProject {
      nodes {
        title
        _rawBody
      }
    }
  }
`
