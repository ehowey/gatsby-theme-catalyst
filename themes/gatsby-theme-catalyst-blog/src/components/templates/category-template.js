/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Seo, Layout } from "gatsby-theme-catalyst-core"

const CategoryPage = ({ posts, category }) => {
  return (
    <Layout>
      <Seo title={"Category: " + category} />
      <Themed.h1>Category: {category}</Themed.h1>
      <Themed.ul>
        {posts.map((post) => (
          <Themed.li key={post.slug}>
            <Themed.p>
              <Themed.a as={Link} to={post.slug} sx={{ fontSize: 3 }}>
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
