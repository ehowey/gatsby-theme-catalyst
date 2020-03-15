/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import SanityContent from "../sanity/sanity-content"

const PostTemplate = ({ data }) => {
  const post = data.sanityPost
  return (
    <Layout>
      <SEO title={post.title} />
      <Styled.h1>{post.title}</Styled.h1>
      <SanityContent data={post._rawBody} />
    </Layout>
  )
}

export default PostTemplate
