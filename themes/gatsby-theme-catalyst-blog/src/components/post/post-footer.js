import React from "react"
import { Link } from "gatsby"
import { Styled, Flex } from "theme-ui"

const PostFooter = ({ previous, next }) => (
  <div>
    <Styled.hr />
    {(previous || next) && (
      <Flex as="ul">
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
