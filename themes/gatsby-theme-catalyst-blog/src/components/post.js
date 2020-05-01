/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostFooter from "./post-footer"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.excerpt}
      image={post.seoImage.childImageSharp.seo}
      keywords={post.keywords}
    />
    <Styled.h1>{post.title}</Styled.h1>
    <Styled.p>{post.date}</Styled.p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
