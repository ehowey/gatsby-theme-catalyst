/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"

const CategoryListPage = ({ categories }) => {
  return (
    <Layout>
      <SEO title="All Categories" />
      <Themed.h1>All Categories</Themed.h1>
      <Themed.ul>
        {categories.map((category) => (
          <Themed.li key={category.id}>
            <Themed.a as={Link} to={`/categories/${category.slug.current}/`}>
              {category.title}
            </Themed.a>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default CategoryListPage
