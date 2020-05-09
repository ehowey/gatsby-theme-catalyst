/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import PostFooter from "./post-footer"
import { FaRegClock } from "react-icons/fa"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.excerpt}
      image={post.socialImage.childImageSharp.seo}
    />
    <article
      sx={{
        variant: "variants.postContainer",
      }}
    >
      <Styled.h1
        sx={{
          fontFamily: "serif",
          fontSize: 8,
          textAlign: "center",
          variant: "variants.postTitle",
        }}
      >
        {post.title}
      </Styled.h1>
      <Styled.h2
        sx={{
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: 4,
          fontWeight: "normal",
          my: 0,
          mx: "auto",
          textAlign: "center",
          maxWidth: ["100%", "70%", "50%", null, null],
          lineHeight: "1.15em",
          variant: "variants.postSubTitle",
        }}
      >
        {post.subTitle}
      </Styled.h2>
      <Styled.p
        sx={{
          color: "grey",
          fontFamily: "serif",
          lineHeight: "1.15em",
          textAlign: "center",
          a: {
            color: "grey",
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline",
            },
          },
          variant: "variants.postMeta",
        }}
      >
        {post.date}
      </Styled.p>
      <hr
        sx={{
          width: "33%",
          height: "6px",
          color: "primary",
          bg: "primary",
          borderWidth: 0,
        }}
      />
      <Img
        sx={{
          my: 4,
          maxHeight: "400px",
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
          variant: "variants.postImage",
        }}
        fluid={post.featuredImage.childImageSharp.fluid}
        alt={post.title}
      />
      <span sx={{ color: "grey", fontSize: 1, mb: -3, display: "block" }}>
        {post.author} &mdash;{" "}
        <FaRegClock
          sx={{
            position: "relative",
            top: "0.125em",
          }}
        />{" "}
        {post.timeToRead} Min
      </span>
      <MDXRenderer>{post.body}</MDXRenderer>
    </article>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
