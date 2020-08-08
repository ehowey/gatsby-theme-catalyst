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
        <div sx={{ my: 5 }}>
          {posts.map((post) => (
            <article
              sx={{
                mb: 5,
                ":last-of-type": {
                  mb: 0,
                },
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
                    borderRadius: "5px",
                  }}
                />
              </Styled.a>
              <Styled.a
                as={Link}
                to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
                style={{ textDecoration: "none" }}
              >
                <Styled.h2
                  sx={{
                    mt: 2,
                    mb: 0,
                    fontSize: [4, null, null, 5, null],
                    transition: "color 0.2s ease",
                    ":hover, :focus, :active": {
                      color: "secondary",
                    },
                  }}
                >
                  {post.title}
                </Styled.h2>
              </Styled.a>
              <Styled.p sx={{ fontSize: 1, color: "textGray", m: 0, mt: 2 }}>
                {post.date} &bull;{" "}
                <FaRegClock
                  sx={{
                    position: "relative",
                    top: "0.125em",
                  }}
                />{" "}
                {post.readingTimeInMinutes} Min
              </Styled.p>
              <Styled.p sx={{ mt: 2, mb: 0 }}>{post.excerpt}</Styled.p>
              <Styled.a
                as={Link}
                to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
                sx={{
                  transition: "color 0.2s ease",
                  ":hover, :focus, :active": {
                    color: "secondary",
                  },
                }}
                style={{ textDecoration: "none" }}
              >
                Read More &rarr;
              </Styled.a>
            </article>
          ))}
        </div>
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostsTemplate
