/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import kebabCase from "lodash/kebabCase"

const CategoryList = ({ categories }) => {
  return (
    <Layout>
      <SEO title="Categories" />
      <Themed.ul>
        <Themed.h1>Categories</Themed.h1>
        {categories.map((category) => (
          <Themed.li key={category.fieldValue}>
            <Themed.p>
              <Themed.a
                as={Link}
                to={`/categories/${kebabCase(category.fieldValue)}/`}
                sx={{ fontSize: 3 }}
              >
                {category.fieldValue}
              </Themed.a>{" "}
              &mdash; {category.totalCount} posts
            </Themed.p>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default CategoryList
