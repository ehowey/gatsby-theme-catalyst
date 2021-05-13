import React from "react"
import { graphql } from "gatsby"
import TagList from "../templates/tag-list-template"

const TagListQuery = ({ data }) => {
  return <TagList tags={data.tagList.group} />
}

export const query = graphql`
  query {
    tagList: allCatalystPost(
      limit: 1000
      filter: { draft: { ne: true }, published: { eq: true } }
    ) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagListQuery
