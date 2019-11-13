import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import PostFooter from "../components/postFooter"
import { SEO } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({ data: { post }, previous, next }) => (
  <Fragment>
    <SEO title={post.title} description={post.excerpt} />
    <Styled.h1>{post.title}</Styled.h1>
    <Styled.p>{post.date}</Styled.p>
    {post.tags}
    <MDXRenderer>{post.body}</MDXRenderer>
    <PostFooter {...{ previous, next }} />
  </Fragment>
)

export default Post
