/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { SEO } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostTitle from "./post/post-title"
import PostMeta from "./post/post-meta"
import PostImage from "./post/post-image"

const Post = ({ data: { post }, previous, next }) => (
  <Fragment>
    <SEO title={post.title} description={post.excerpt} />
    <PostImage image={post.featuredImage.childImageSharp.fluid} />
    <PostTitle>{post.title}</PostTitle>
    <PostMeta date={post.date} />
    <MDXRenderer>{post.body}</MDXRenderer>
  </Fragment>
)

export default Post
