/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { SEO } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostTitle from "./post/post-title"
import PostMeta from "./post/post-meta"
import PostImage from "./post/post-image"
import PostFooter from "./post/post-footer"

const Post = ({ data: { post }, previous, next }) => (
  <Fragment>
    <SEO title={post.title} description={post.excerpt} />
    <PostImage image={post.featuredImage.childImageSharp.fluid} />
    <PostMeta>
      <a href={post.authorLink} target="_blank" rel="noopener noreferrer">
        {post.author}
      </a>{" "}
      &bull; {post.date}
    </PostMeta>
    <PostTitle>{post.title}</PostTitle>
    <MDXRenderer>{post.body}</MDXRenderer>
    <PostFooter {...{ previous, next }} />
  </Fragment>
)

export default Post
