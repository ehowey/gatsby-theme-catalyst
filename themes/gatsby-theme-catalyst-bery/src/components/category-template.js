/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { useSanityConfig } from "gatsby-theme-catalyst-sanity"

const CategoryPage = ({ posts, category }) => {
  const { sanityPostPath } = useSanityConfig()
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash
  return (
    <Layout>
      <SEO title={"Category: " + category} />
      <Styled.h1>Category: {category}</Styled.h1>
      <Styled.ul>
        {posts.map((post) => (
          <Styled.li key={post.id}>
            <Styled.p>
              <Styled.a
                as={Link}
                to={rootPath.concat(post.slug.current.replace(/\/*$/, `/`))}
                sx={{ fontSize: 3 }}
              >
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
