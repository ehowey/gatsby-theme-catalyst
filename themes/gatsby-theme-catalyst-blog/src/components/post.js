/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import Img from "gatsby-image"
import { SEO } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({ data: { post }, previous, next }) => (
  <Fragment>
    <SEO title={post.title} description={post.excerpt} />
    <Img
      sx={{
        height: "250px",
        mb: 3,
      }}
      fluid={post.featuredImage.childImageSharp.fluid}
    />
    <Styled.h1>{post.title}</Styled.h1>
    <Styled.p>{post.date}</Styled.p>
    {post.tags}
    <MDXRenderer>{post.body}</MDXRenderer>
  </Fragment>
)

export default Post
