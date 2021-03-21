/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

const CategoryPage = ({ posts, category }) => {
  const { sanityPostPath } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <Layout>
      <SEO title={"Category: " + category} />
      <Themed.h1>Category: {category}</Themed.h1>
      <Themed.ul>
        {posts.map((post) => (
          <Themed.li key={post.id}>
            <Themed.p>
              <Themed.a
                as={Link}
                to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
                sx={{ fontSize: 3 }}
              >
                {post.title}
              </Themed.a>
              <br />
              {post.excerpt}
            </Themed.p>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default CategoryPage
