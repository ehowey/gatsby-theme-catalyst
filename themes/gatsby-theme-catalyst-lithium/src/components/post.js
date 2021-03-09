/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image";
import PostFooter from "./post-footer"
import kebabCase from "lodash/kebabCase"
import { FaRegClock } from "react-icons/fa"

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
        display: "grid",
        gridTemplateRows: [
          "150px auto",
          "300px auto",
          "200px 250px auto",
          "150px 250px auto",
          "250px 250px auto",
        ],
        gridTemplateColumns: "1fr minmax(0px, 768px) 1fr",
        justifyContent: "center",
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        mt: -3,
        variant: "variants.postContainer",
      }}
    >
      <GatsbyImage
        image={post.featuredImage.childImageSharp.gatsbyImageData}
        sx={{
          gridColumn: "1 / -1",
          gridRow: ["1 / 2", null, "1 / 3", null, null],
          zIndex: 10,
          width: "100%",
          maxWidth: "maxPageWidth",
          mx: "auto",
          variant: "variants.postImage",
        }}
        alt={post.title} />
      <div
        sx={{
          gridColumn: "2 / 3",
          gridRow: ["2 / -1", null, "2 / -1", null, null],
          zIndex: 20,
          bg: "background",
        }}
      >
        <span
          sx={{
            color: "textGray",
            fontSize: 1,
            ml: 3,
          }}
        >
          {post.featuredImageCaption}
        </span>
        <div
          sx={{
            pt: 3,
            pb: 5,
            px: [3, null, 4, null, null],
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
                key={kebabCase(category)}
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: "wide",
                  color: "primary",
                  "::after": {
                    content: `"\\2022"`,
                    px: 2,
                  },
                  ":last-of-type": {
                    "::after": {
                      content: "none",
                    },
                  },
                  variant: "variants.postCategories",
                }}
              >
                <Styled.a as={Link} to={`/categories/${kebabCase(category)}/`}>
                  {category}
                </Styled.a>
              </Styled.li>
            ))}
          </Styled.ul>
          <Styled.h1
            sx={{
              textAlign: "center",
              fontSize: [5, 6, null, null, null],
              mt: 3,
              mb: 3,
              "::after": {
                display: "block",
                content: '""',
                width: "100px",
                pt: 3,
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "primary",
                margin: "0 auto",
              },
              variant: "variants.postTitle",
            }}
          >
            {post.title}
          </Styled.h1>
          <Styled.p
            sx={{
              color: "textGray",
              fontSize: 1,
              textTransform: "uppercase",
              letterSpacing: "wider",
              textAlign: "center",
              m: 0,
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
            {post.date} &bull;{" "}
            <FaRegClock
              sx={{
                position: "relative",
                top: "0.125em",
              }}
            />{" "}
            {post.timeToRead} Min
          </Styled.p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <PostFooter {...{ previous, next }} />
        </div>
      </div>
    </article>
  </Layout>
)

export default Post
