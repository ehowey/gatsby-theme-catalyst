/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaRegClock } from "react-icons/fa"
import { useCatalystBlogConfig } from "gatsby-theme-catalyst-blog"
import { useHeliumConfig } from "gatsby-theme-catalyst-helium"
import Hero from "./hero"

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
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            variant: "variants.postListContainer",
            maxWidth: "maxPageWidth",
            mx: "auto",
          }}
        >
          {posts.map((post, index) => {
            const firstPost = index === 0
            const title = post.title || post.slug
            return (
              <article
                sx={{
                  mx: [0, null, 3, 4, null],
                  my: [4, null, 3, 4, null],
                  display: "grid",
                  gridTemplateColumns: "32px 1fr 32px",
                  gridTemplateRows: [
                    "100px 200px 1fr",
                    "150px 80px 1fr",
                    "150px 100px 1fr",
                    "200px 100px 1fr",
                    null,
                  ],
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
                    mx: [0, null, 3, 4, null],
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
                        maxHeight: "100%",
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
                      sx={{ listStyle: "none", m: 0, p: 0, display: "flex" }}
                    >
                      {post.categories.map((category) => (
                        <Styled.li
                          sx={{
                            my: 0,
                            color: "primary",
                            fontSize: 1,
                            textTransform: "uppercase",
                            letterSpacing: "wide",
                            "::after": {
                              content: `"\\2022"`,
                              px: 2,
                            },
                            ":last-of-type": {
                              "::after": {
                                content: "none",
                              },
                            },
                          }}
                        >
                          {category}
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
