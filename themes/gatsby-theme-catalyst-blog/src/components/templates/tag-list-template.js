/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import kebabCase from "lodash/kebabCase"

const TagList = ({ tags }) => {
  return (
    <Layout>
      <SEO title="Tags" />
      <Styled.h1>Tags</Styled.h1>
      <Styled.ul>
        {tags.map((tag) => (
          <Styled.li key={tag.fieldValue}>
            <Styled.p>
              <Styled.a
                as={Link}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                sx={{ fontSize: 3 }}
              >
                {tag.fieldValue}
              </Styled.a>{" "}
              &mdash; {tag.totalCount} posts
            </Styled.p>
          </Styled.li>
        ))}
      </Styled.ul>
    </Layout>
  )
}

export default TagList
