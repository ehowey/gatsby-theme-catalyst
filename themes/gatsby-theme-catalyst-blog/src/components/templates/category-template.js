/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const CategoryPage = ({ posts, category }) => {
  return (
    <Layout>
      <SEO title={"Category: " + category} />
      <Styled.h1>Category: {category}</Styled.h1>
      <Styled.ul>
        {posts.map((post) => (
          <Styled.li key={post.slug}>
            <Styled.p>
              <Styled.a as={Link} to={post.slug} sx={{ fontSize: 3 }}>
                {post.title}
              </Styled.a>
              <br />
              {post.excerpt}
            </Styled.p>
          </Styled.li>
        ))}
      </Styled.ul>
    </Layout>
  )
}

export default CategoryPage
