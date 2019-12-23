/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostTitle = props => {
  return <Styled.h1> {props.children}</Styled.h1>
}

export default PostTitle
