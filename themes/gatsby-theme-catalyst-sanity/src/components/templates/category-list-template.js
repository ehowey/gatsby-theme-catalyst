/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Seo, Layout } from "gatsby-theme-catalyst-core"

const CategoryListPage = ({ categories }) => {
  return (
    <Layout>
      <Seo title="All Categories" />
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
