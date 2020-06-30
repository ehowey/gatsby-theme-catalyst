/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PostFooter from "./post-footer"
import { FaRegClock } from "react-icons/fa"
import kebabCase from "lodash/kebabCase"

const Post = ({ data: { post }, previous, next }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.excerpt}
      image={post.socialImage.childImageSharp.seo}
      keywords={post.keywords}
    />
    <article
      sx={{
        variant: "variants.postContainer",
      }}
    >
      <div
        sx={{
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
        }}
      >
        <div
          sx={{
            py: 4,
            bg: "muted",
          }}
        >
          <Styled.ul
            aria-label="Categories"
            sx={{
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
              p: 0,
              m: 0,
            }}
          >
            {post.categories.map((category) => (
              <Styled.li
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: "wide",
                  color: "link",
                  "::after": {
                    content: `"\\2022"`,
                    px: 2,
                  },
                  ":last-of-type": {
                    "::after": {
                      content: "none",
                    },
                  },
                  variant: "variants.postCategory",
                }}
              >
                <Styled.a as={Link} to={`/categories/${kebabCase(category)}/`}>
                  {category}
                </Styled.a>
              </Styled.li>
            ))}
          </Styled.ul>
          <h1
            sx={{
              fontFamily: "heading",
              fontWeight: "normal",
              lineHeight: "heading",
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
          </h1>
          <h2
            sx={{
              fontFamily: "heading",
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
          </h2>
          <Styled.p
            sx={{
              color: "textGray",
              lineHeight: "1.15em",
              textAlign: "center",
              fontSize: [1, null, 2, null, null],
              a: {
                color: "textGray",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline",
                },
              },
              variant: "variants.postMeta",
            }}
          >
            {post.author} &bull; {post.date}
          </Styled.p>
          <hr
            sx={{
              width: ["40%", "30%", "20%", null, "10%"],
              height: "6px",
              color: "link",
              bg: "link",
              borderWidth: 0,
            }}
          />
        </div>
        <div sx={{ mb: 4 }}>
          <Img
            sx={{
              maxHeight: "400px",
              variant: "variants.postImage",
            }}
            fluid={post.featuredImage.childImageSharp.fluid}
            alt={post.title}
          />
          <span sx={{ ml: 1, color: "textGray", fontSize: 1 }}>
            {post.featuredImageCaption}
          </span>
        </div>
      </div>
      <span
        sx={{
          color: "textGray",
          fontSize: 1,
          mb: -3,
          display: "block",
        }}
      >
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
