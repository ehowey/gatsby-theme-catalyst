import React from "react"
import { graphql } from "gatsby"
import ProjectList from "../templates/project-list-template"

export default ({ data }) => {
  return <ProjectList data={{ ...data }} />
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
