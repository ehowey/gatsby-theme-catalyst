/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaRegClock } from "react-icons/fa"
import { useCatalystBlogConfig } from "gatsby-theme-catalyst-blog"
import { useHeliumConfig } from "gatsby-theme-catalyst-helium"
import Hero from "./hero"
import kebabCase from "lodash/kebabCase"

const PostsList = ({ posts }) => {
  const { postListTitle, displayPostListTitle } = useCatalystBlogConfig()
  const { useHero } = useHeliumConfig()
  return (
    <Layout>
      <SEO title={postListTitle} />
      {useHero && <Hero />}
      <div
        sx={{
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
        }}
      >
        {displayPostListTitle ? (
          <Themed.h1
            sx={{
              maxWidth: "maxContentWidth",
              mx: "auto",
              my: 5,
              textAlign: "center",
              variant: "variants.postListPageTitle",
            }}
          >
            {postListTitle}
          </Themed.h1>
        ) : null}
        <div
          sx={{
            display: ["flex", null, "grid", null, null],
            flexDirection: "column",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gridColumnGap: [0, null, 4, null, null],
            gridRowGap: [0, null, 5, null, null],
            variant: "variants.postListContainer",
            maxWidth: "maxPageWidth",
            mx: "auto",
            my: [4, null, null, 5, null],
            px: [3, null, 4, 5, 5],
          }}
        >
          {posts.map((post, index) => {
            const firstPost = index === 0
            const title = post.title || post.slug
            return (
              <article
                sx={{
                  display: "grid",
                  gridTemplateColumns: "24px 1fr 24px",
                  gridTemplateRows: [
                    "100px 200px minmax(24px, auto)",
                    "150px 200px minmax(24px, auto)",
                    "180px 180px minmax(24px, auto)",
                    "200px 200px minmax(24px, auto)",
                    "220px 220px minmax(24px, auto)",
                  ],
                  mb: [5, null, 0, null, null],
                  ":last-of-type": {
                    mb: 0,
                  },
                  ":nth-of-type(1)": {
                    gridColumn: "1 / span 2",
                    gridRow: "1 / span 1",
                    gridTemplateColumns: [
                      "24px 1fr 24px",
                      null,
                      "24px 1fr 1fr 1fr 1fr 24px",
                      null,
                      null,
                    ],
                    gridTemplateRows: [
                      "100px 300px 1fr",
                      "150px 350px 1fr",
                      "24px auto 1fr",
                      null,
                      null,
                    ],
                    ".postListImage": {
                      gridColumn: "2 / -1",
                      gridRow: ["1 / 3", null, "2 / -1", null, null],
                      maxHeight: ["70vh", null, "70vh", null, null],
                      minHeight: ["auto", null, "500px", null, null],
                    },
                    ".postListContent": {
                      gridColumn: ["1 / 3", null, "1 / 5", null, null],
                      gridRow: ["2 / -1", null, "1 / 3", null, null],
                    },
                  },
                  variant: "variants.postListWrapper",
                }}
                key={post.slug}
              >
                <div
                  sx={{
                    gridColumn: "1 / 3",
                    gridRow: "1 / 3",
                    zIndex: "1",
                  }}
                  className="postListImage"
                >
                  <Link to={post.slug}>
                    <GatsbyImage
                      image={post.featuredImage.childImageSharp.gatsbyImageData}
                      sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        height: "100%",
                        width: "100%",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        variant: "variants.postListImage",
                      }}
                      alt={post.title}
                    />
                  </Link>
                </div>
                <div
                  sx={{
                    gridColumn: "2 / 4",
                    gridRow: "2 / 4",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    zIndex: "2",
                    bg: "accent",
                    px: 3,
                    py: 4,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    variant: "variants.postListContent",
                  }}
                  className="postListContent"
                >
                  <div>
                    <Themed.ul
                      aria-label="Categories"
                      sx={{ listStyle: "none", m: 0, p: 0, display: "flex" }}
                    >
                      {post.categories.map((category) => (
                        <Themed.li
                          key={category}
                          sx={{
                            my: 0,
                            fontSize: 1,
                            textTransform: "uppercase",
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
                            variant: "variants.postListCategory",
                          }}
                        >
                          <Themed.a
                            as={Link}
                            to={`/categories/${kebabCase(category)}/`}
                          >
                            {category}
                          </Themed.a>
                        </Themed.li>
                      ))}
                    </Themed.ul>
                    <Themed.h2
                      sx={{
                        mt: 0,
                        mb: 1,
                        fontSize: 4,
                        variant: "variants.postListTitle",
                      }}
                    >
                      <Themed.a sx={{ color: "text" }} as={Link} to={post.slug}>
                        {title}
                      </Themed.a>
                    </Themed.h2>
                    <Themed.p
                      sx={{
                        my: 0,
                        fontSize: 1,
                        color: "textGray",
                        variant: "variants.postListMeta",
                      }}
                    >
                      {post.date} &mdash;{" "}
                      <FaRegClock
                        sx={{
                          position: "relative",
                          top: "0.125em",
                        }}
                      />{" "}
                      {post.timeToRead} Min
                    </Themed.p>
                    <Themed.p
                      sx={{
                        fontStyle: "italic",
                        mt: 1,
                        variant: "variants.postListSubtitle",
                      }}
                    >
                      {post.subTitle}
                    </Themed.p>
                    {firstPost ? (
                      <Themed.p sx={{ variant: "variants.postListExcerpt" }}>
                        {post.excerpt}
                      </Themed.p>
                    ) : null}
                  </div>
                  <div>
                    <Themed.a
                      sx={{
                        fontWeight: "bold",
                        letterSpacing: "wide",
                        px: 0,
                        py: 0,
                        "::after": {
                          content: '"\\00A0 \\2192"',
                        },
                        ":hover": {
                          textDecoration: "underline",
                          bg: "transparent",
                          border: "none",
                        },
                        variant: "variants.postListReadmore",
                      }}
                      as={Link}
                      to={post.slug}
                    >
                      Read
                    </Themed.a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default PostsList
