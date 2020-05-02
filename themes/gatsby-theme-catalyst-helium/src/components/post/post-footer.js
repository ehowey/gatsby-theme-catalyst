/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { Link } from "gatsby"

const PostFooter = ({ previous, next }) => (
  <div>
    <Styled.hr />
    {(previous || next) && (
      <Flex
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
          listStyle: "none",
          padding: 0,
        }}
        as="ul"
      >
        <li>
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Styled.a>
          )}
        </li>
      </Flex>
    )}
  </div>
)

export default PostFooter
