/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import kebabCase from "lodash/kebabCase"

const CategoryList = ({ categories }) => {
  return (
    <Layout>
      <SEO title="Categories" />
      <Styled.ul>
        <Styled.h1>Categories</Styled.h1>
        {categories.map((category) => (
          <Styled.li key={category.fieldValue}>
            <Styled.p>
              <Styled.a
                as={Link}
                to={`/categories/${kebabCase(category.fieldValue)}/`}
                sx={{ fontSize: 3 }}
              >
                {category.fieldValue}
              </Styled.a>{" "}
              &mdash; {category.totalCount} posts
            </Styled.p>
          </Styled.li>
        ))}
      </Styled.ul>
    </Layout>
  )
}

export default CategoryList
