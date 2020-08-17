/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import Img from "gatsby-image"
import {
  useSanityConfig,
  SanityThemeProvider,
} from "gatsby-theme-catalyst-sanity"
import { FaRegClock } from "react-icons/fa"
import { useState, useEffect } from "react"
import { lightness } from "@theme-ui/color"

const PostListTemplate = ({ data }) => {
  const {
    sanityPostPath,
    sanityPostListTitle,
    sanityDisplayPostListTitle,
  } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash
  const posts = data.allSanityPost.nodes

  // Working with categories

  // Create a new array with a slug and a title for data and display
  const categories = data.allSanityCategory.distinct.map((category) => {
    return {
      title: category,
      slug: category.toLowerCase(),
    }
  })

  //Initialize state
  const [visibleCategories, setVisibleCategories] = useState([])
  const [displayedPosts, setDisplayedPosts] = useState([...posts])

  // Handle button click to add and remove categories
  const handleResults = (category) => {
    let valueIndex = visibleCategories.indexOf(category)
    if (valueIndex === -1) {
      const categoryAdded = [...visibleCategories, category]
      setVisibleCategories(categoryAdded)
    } else {
      const categoryRemoved = visibleCategories.filter(
        (item) => item !== category
      )
      setVisibleCategories(categoryRemoved)
    }
  }

  // Handle changing the posts displayed when the categpory changes
  useEffect(() => {
    if (visibleCategories.length) {
      const filteredResult = posts.filter((post) =>
        post.categories.some(
          (category) =>
            visibleCategories.indexOf(category.title.toLowerCase()) >= 0
        )
      )
      setDisplayedPosts(filteredResult)
    } else {
      setDisplayedPosts(posts)
    }
  }, [visibleCategories, posts])

  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title={sanityPostListTitle} />
        {sanityDisplayPostListTitle && (
          <Styled.h1>{sanityPostListTitle}</Styled.h1>
        )}
        <Styled.p sx={{ mb: 0, fontSize: 1, color: "textGray" }}>
          Sory by categories
        </Styled.p>
        <Styled.ul
          sx={{ listStyle: "none", display: "flex", m: 0, p: 0, mb: 3 }}
        >
          {categories.map((category) => {
            const active = visibleCategories.indexOf(category.slug) !== -1
            return (
              <Styled.li
                sx={{
                  mr: 2,
                  ":last-of-type": {
                    mr: 0,
                  },
                }}
                key={category.slug}
              >
                <Button
                  onClick={() => {
                    handleResults(`${category.slug}`)
                  }}
                  sx={{
                    px: 2,
                    py: 0,
                    fontSize: 1,
                    transition: "all 0.3s ease",
                    borderRadius: "4px",
                    color: active ? lightness("text", 1) : lightness("text", 0),
                    bg: active ? "secondary" : "muted",
                  }}
                >
                  {category.title}
                </Button>
              </Styled.li>
            )
          })}
        </Styled.ul>
        <div sx={{ my: 5 }}>
          {displayedPosts.map((post) => (
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
                    color: "primary",
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
                  color: "primary",
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

export default PostListTemplate
