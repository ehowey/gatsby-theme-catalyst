/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostContainer from "./post/post-container"
import PostTitle from "./post/post-title"
import PostSubTitle from "./post/post-subtitle"
import PostMeta from "./post/post-meta"
import PostImage from "./post/post-image"
import PostFooter from "./post/post-footer"
import { FaRegClock } from "react-icons/fa"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <PostContainer>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.socialImage.childImageSharp.seo}
        keywords={post.keywords}
      />
      <PostTitle>{post.title}</PostTitle>
      <PostSubTitle>{post.subTitle}</PostSubTitle>
      <PostMeta>{post.date}</PostMeta>
      <hr
        sx={{
          width: "33%",
          height: "6px",
          color: "primary",
          bg: "primary",
          borderWidth: 0,
        }}
      />
      <PostImage
        image={post.featuredImage.childImageSharp.fluid}
        altText={post.title}
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
      <PostFooter {...{ previous, next }} />
    </PostContainer>
  </Layout>
)

export default Post
