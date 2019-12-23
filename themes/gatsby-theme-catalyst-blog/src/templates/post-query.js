import React from "react"
import { graphql } from "gatsby"
import Post from "../components/post"

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
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
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
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
