/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const CategoryListPage = ({ categories }) => {
  return (
    <Layout>
      <SEO title="All Categories" />
      <Styled.h1>All Categories</Styled.h1>
      <Styled.ul>
        {categories.map((category) => (
          <Styled.li key={category.id}>
            <Styled.a as={Link} to={`/categories/${category.slug.current}/`}>
              {category.title}
            </Styled.a>
          </Styled.li>
        ))}
      </Styled.ul>
    </Layout>
  )
}

export default CategoryListPage
