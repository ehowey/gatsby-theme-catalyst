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
      <div
        sx={{ width: "100vw", position: "relative", left: "calc(-50vw + 50%)" }}
      >
        <Styled.h1
          sx={{
            fontSize: [6, 7, 8, null, null],
            textAlign: "center",
            maxWidth: ["100%", null, null, "90%", "80%"],
            my: 2,
            mx: "auto",
            px: 3,
            variant: "variants.postTitle",
          }}
        >
          {post.title}
        </Styled.h1>
        <Styled.h2
          sx={{
            fontStyle: "italic",
            fontSize: [3, 4, null, null, null],
            fontWeight: "normal",
            my: 2,
            mx: "auto",
            px: 3,
            textAlign: "center",
            maxWidth: ["100%", null, "80%", "70%", "60%"],
            lineHeight: "1.15em",
            variant: "variants.postSubTitle",
          }}
        >
          {post.subTitle}
        </Styled.h2>
        <Styled.p
          sx={{
            color: "grey",
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
            width: "20%",
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
            variant: "variants.postImage",
          }}
          fluid={post.featuredImage.childImageSharp.fluid}
          alt={post.title}
        />
      </div>
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
