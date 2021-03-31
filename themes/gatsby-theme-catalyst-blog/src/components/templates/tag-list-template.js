/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import kebabCase from "lodash/kebabCase"

const TagList = ({ tags }) => {
  return (
    <Layout>
      <Seo title="Tags" />
      <Themed.h1>Tags</Themed.h1>
      <Themed.ul>
        {tags.map((tag) => (
          <Themed.li key={tag.fieldValue}>
            <Themed.p>
              <Themed.a
                as={Link}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                sx={{ fontSize: 3 }}
              >
                {tag.fieldValue}
              </Themed.a>{" "}
              &mdash; {tag.totalCount} posts
            </Themed.p>
          </Themed.li>
        ))}
      </Themed.ul>
    </Layout>
  )
}

export default TagList
