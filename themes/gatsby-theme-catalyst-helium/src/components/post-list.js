/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { Link } from "gatsby"
import Img from "gatsby-image"
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
          <Styled.h1
            sx={{
              maxWidth: "maxContentWidth",
              mx: "auto",
              my: 5,
              textAlign: "center",
              variant: "variants.postListPageTitle",
            }}
          >
            {postListTitle}
          </Styled.h1>
        ) : null}
        <div
          sx={{
            display: ["flex", null, "grid", null, null],
            flexDirection: "column",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gridColumnGap: 4,
            gridRowGap: 5,
            variant: "variants.postListContainer",
            maxWidth: "maxPageWidth",
            mx: [0, 3, null, null, "auto"],
            my: 5,
          }}
        >
          {posts.map((post, index) => {
            const firstPost = index === 0
            const title = post.title || post.slug
            return (
              <article
                sx={{
                  display: "grid",
                  gridTemplateColumns: "32px 1fr 32px",
                  gridTemplateRows: [
                    "100px 200px 1fr",
                    "150px 100px 1fr",
                    "180px 100px 1fr",
                    "200px 100px 1fr",
                    "220px 100px 1fr",
                  ],
                  mb: [5, null, 0, null, null],
                  ":last-of-type": {
                    mb: 0,
                  },
                  ":nth-of-type(1)": {
                    gridColumn: "1 / span 2",
                    gridRow: "1 / span 1",
                    gridTemplateColumns: [
                      "32px 1fr 32px",
                      null,
                      "32px 1fr 1fr 1fr 1fr 32px",
                      null,
                      null,
                    ],
                    gridTemplateRows: [
                      "100px 200px 1fr",
                      "150px 150px 1fr",
                      "32px auto 1fr",
                      null,
                      null,
                    ],
                    ".postListImage": {
                      gridColumn: "2 / -1",
                      gridRow: ["1 / 3", null, "2 / -1", null, null],
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
                    <Img
                      sx={{
                        maxWidth: "100%",
                        maxHeight: "70vh",
                        height: "100%",
                        width: "100%",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        variant: "variants.postListImage",
                      }}
                      fluid={post.featuredImage.childImageSharp.fluid}
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
                    <Styled.ul
                      aria-label="Categories"
                      sx={{ listStyle: "none", m: 0, p: 0, display: "flex" }}
                    >
                      {post.categories.map((category) => (
                        <Styled.li
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
                          <Styled.a
                            as={Link}
                            to={`/categories/${kebabCase(category)}/`}
                          >
                            {category}
                          </Styled.a>
                        </Styled.li>
                      ))}
                    </Styled.ul>
                    <Styled.h2
                      sx={{
                        mt: 0,
                        mb: 1,
                        fontSize: 4,
                        variant: "variants.postListTitle",
                      }}
                    >
                      <Styled.a sx={{ color: "text" }} as={Link} to={post.slug}>
                        {title}
                      </Styled.a>
                    </Styled.h2>
                    <Styled.p
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
                    </Styled.p>
                    <Styled.p
                      sx={{
                        fontStyle: "italic",
                        mt: 1,
                        variant: "variants.postListSubtitle",
                      }}
                    >
                      {post.subTitle}
                    </Styled.p>
                    {firstPost ? (
                      <Styled.p sx={{ variant: "variants.postListExcerpt" }}>
                        {post.excerpt}
                      </Styled.p>
                    ) : null}
                  </div>
                  <div>
                    <Styled.a
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
                    </Styled.a>
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
