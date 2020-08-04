/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import Img from "gatsby-image"
import {
  useSanityConfig,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"
import { FaRegClock } from "react-icons/fa"

const PostsTemplate = ({ data }) => {
  const posts = data.allSanityPost.nodes
  const {
    sanityPostPath,
    sanityPostListTitle,
    sanityDisplayPostListTitle,
  } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash

  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={sanityPostListTitle} />
        {sanityDisplayPostListTitle && (
          <Styled.h1>{sanityPostListTitle}</Styled.h1>
        )}
        {posts.map((post) => (
          <article
            sx={{
              mb: 5,
            }}
            key={post.id}
          >
            <Styled.a
              as={Link}
              to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
            >
              <Img
                fluid={post.featuredImage.asset.fluid}
                sx={{
                  height: "250px",
                }}
              />
            </Styled.a>
            <Styled.a
              as={Link}
              to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
            >
              <Styled.h2 sx={{ mt: 2, mb: 0 }}>{post.title}</Styled.h2>
            </Styled.a>
            <Styled.p sx={{ fontSize: 1, color: "textGray", m: 0 }}>
              {post.date} &bull;{" "}
              <FaRegClock
                sx={{
                  position: "relative",
                  top: "0.125em",
                }}
              />{" "}
              {post.readingTimeInMinutes} Min
            </Styled.p>
            <Styled.p>{post.excerpt}</Styled.p>
            <Styled.a
              as={Link}
              to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
            >
              Read More &rarr;
            </Styled.a>
          </article>
        ))}
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostsTemplate
