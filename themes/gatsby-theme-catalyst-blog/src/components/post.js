/** @jsx jsx */
import { jsx } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostContainer from "./post/post-container"
import PostTitle from "./post/post-title"
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
        image={post.featuredImage.childImageSharp.seo}
        keywords={post.keywords}
      />
      <PostImage
        image={post.featuredImage.childImageSharp.fluid}
        altText={post.title}
      />
      <PostMeta>
        <a href={post.authorLink} target="_blank" rel="noopener noreferrer">
          {post.author}
        </a>{" "}
        &bull; {post.date} &bull;{" "}
        <FaRegClock
          sx={{
            position: "relative",
            top: "0.125em",
          }}
        />{" "}
        {post.timeToRead} Min
      </PostMeta>
      <PostTitle>{post.title}</PostTitle>
      <MDXRenderer>{post.body}</MDXRenderer>
      <PostFooter {...{ previous, next }} />
    </PostContainer>
  </Layout>
)

export default Post
