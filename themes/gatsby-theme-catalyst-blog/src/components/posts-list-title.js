/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const PostListTitle = props => {
  return (
    <Styled.h2>
      <Styled.a as={Link} to={props.link}>
        {props.children}
      </Styled.a>
    </Styled.h2>
  )
}

export default PostListTitle
