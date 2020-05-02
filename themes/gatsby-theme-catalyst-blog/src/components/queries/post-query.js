import React from "react"
import { graphql } from "gatsby"
import Post from "../templates/post-template"

export default ({ data }) => {
  const { catalystPost, previous, next } = data
  return (
    <Post
      data={{ ...data, post: catalystPost }}
      previous={previous}
      next={next}
    />
  )
}

export const query = graphql`
  query($id: String!, $previousId: String, $nextId: String) {
    catalystPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      author
      authorLink
      tags
      keywords
      postType
      timeToRead
      date(formatString: "MMMM DD, YYYY")
    }
    previous: catalystPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: catalystPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
