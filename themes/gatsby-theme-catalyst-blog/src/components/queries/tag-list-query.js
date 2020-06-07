import React from "react"
import { graphql } from "gatsby"
import TagList from "../templates/tag-list-template"

export default ({ data }) => {
  return <TagList tags={data.tagList.group} />
}

export const query = graphql`
  query {
    tagList: allCatalystPost(limit: 1000, filter: { draft: { eq: false } }) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
