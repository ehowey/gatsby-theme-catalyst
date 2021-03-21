/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
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
          <Themed.ul
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
              <Themed.li
                key={kebabCase(category)}
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
                <Themed.a as={Link} to={`/categories/${kebabCase(category)}/`}>
                  {category}
                </Themed.a>
              </Themed.li>
            ))}
          </Themed.ul>
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
          <Themed.p
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
          </Themed.p>
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
          <GatsbyImage
            image={post.featuredImage.childImageSharp.gatsbyImageData}
            sx={{
              maxHeight: "400px",
              variant: "variants.postImage",
            }}
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
