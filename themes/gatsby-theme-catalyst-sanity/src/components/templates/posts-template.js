/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import SanityContent from "../sanity/sanity-content"

const PostsTemplate = ({ data }) => {
  const posts = data.allSanityPost.nodes
  return (
    <Layout>
      <SEO title="Blog" />
      {posts.map(post => (
        <div>
          <Styled.h1>{post.title}</Styled.h1>
          <SanityContent data={post._rawBody} />
        </div>
      ))}
    </Layout>
  )
}

export default PostsTemplate
