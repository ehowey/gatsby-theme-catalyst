/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"
import { FaRegClock } from "react-icons/fa"
import PostFooter from "./post-footer"

const PostTemplate = ({ data, previous, next }) => {
  const post = data.sanityPost
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO
          title={post.title}
          image={post.featuredImage}
          description={post.excerpt}
        />
        <article
          sx={{
            mt: [5, 4, null, 3, null],
            mb: 3,
          }}
        >
          <GatsbyImage
            image={post.featuredImage.asset.gatsbyImageData}
            sx={{
              maxHeight: ["250px", "250px", "250px", "350px", "350px"],
              minWidth: "100%",
              borderRadius: "5px",
            }}
          />
          <span sx={{ fontSize: 1, color: "textGray" }}>
            {post.featuredImage.caption}
          </span>
          <Themed.ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
              mt: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {post.categories.map((category) => (
              <Themed.li
                key={category.slug}
                sx={{
                  "::after": {
                    content: `"\\2022"`,
                    color: "primary",
                    px: 2,
                  },
                  ":last-of-type": {
                    "::after": {
                      content: "none",
                    },
                  },
                }}
              >
                <Themed.a
                  as={Link}
                  to={`/categories/${category.slug.current}`}
                  sx={{
                    textDecoration: "none",
                    color: "primary",
                    transition: "color 0.2s ease",
                    ":hover, :focus, :active": {
                      color: "secondary",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {category.title}
                </Themed.a>
              </Themed.li>
            ))}
          </Themed.ul>
          <Themed.h1
            sx={{
              m: 0,
              pt: 0,
              pb: 2,
              textAlign: "center",
              fontSize: [5, null, null, 6, null],
              ":after": {
                content: "none",
              },
            }}
          >
            <div sx={{ borderRadius: "4px" }}>{post.title}</div>
          </Themed.h1>
          <Themed.p
            sx={{ color: "textGray", fontSize: 1, textAlign: "center", mt: 0 }}
          >
            <FaRegClock
              sx={{
                position: "relative",
                top: "0.125em",
              }}
            />{" "}
            {post.readingTimeInMinutes} Min Read &bull; {post.date}
          </Themed.p>
          <SanityContent data={post._rawBody} />
        </article>
        <PostFooter previous={previous} next={next} />
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostTemplate
