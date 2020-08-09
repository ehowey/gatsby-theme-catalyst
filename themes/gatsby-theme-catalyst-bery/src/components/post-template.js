/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  SanityContent,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"
import { FaRegClock } from "react-icons/fa"

const PostTemplate = ({ data }) => {
  const post = data.sanityPost
  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={post.title} />
        <Img
          fluid={post.featuredImage.asset.fluid}
          sx={{
            maxHeight: ["250px", "250px", "250px", "350px", "350px"],
            minWidth: "100%",
            borderRadius: "5px",
          }}
        />
        <Styled.ul
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
            <Styled.li
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
              <Link
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
              </Link>
            </Styled.li>
          ))}
        </Styled.ul>
        <Styled.h1
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
        </Styled.h1>
        <Styled.p
          sx={{ color: "textGray", fontSize: 1, textAlign: "center", mt: 0 }}
        >
          <FaRegClock
            sx={{
              position: "relative",
              top: "0.125em",
            }}
          />{" "}
          {post.readingTimeInMinutes} Min Read &bull; {post.date}
        </Styled.p>
        <SanityContent data={post._rawBody} />
      </Layout>
    </SanityThemeProvider>
  )
}

export default PostTemplate
