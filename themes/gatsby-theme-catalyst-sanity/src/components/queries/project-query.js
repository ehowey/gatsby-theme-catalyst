import React from "react"
import { graphql } from "gatsby"
import Project from "../templates/project-template"

export default ({ data }) => {
  return <Project data={{ ...data }} />
}

export const query = graphql`
  query SanityProjectQuery($id: String!) {
    sanityProject(id: { eq: $id }) {
      id
      title
      _rawBody
    }
  }
`
