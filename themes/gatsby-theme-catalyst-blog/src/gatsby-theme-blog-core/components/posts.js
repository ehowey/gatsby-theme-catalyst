import React from "react"
import Posts from "../../components/posts"

export default ({ data }) => {
  const { allBlogPost } = data
  return <Posts posts={allBlogPost.edges} />
}
