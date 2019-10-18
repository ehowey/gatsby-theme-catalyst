import React from "react"
import { Styled } from "theme-ui"
import PostFooter from "../components/postFooter"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <SEO title={post.title} description={post.excerpt} />
    <Styled.h1>{post.title}</Styled.h1>
    <Styled.p>{post.date}</Styled.p>
    {post.tags}
    <MDXRenderer>{post.body}</MDXRenderer>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
