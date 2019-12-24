/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const PostListTitle = props => {
  return (
    <Styled.h2
      sx={{
        mt: 0,
        variant: "variants.postListTitle",
      }}
    >
      <Styled.a as={Link} to={props.link}>
        {props.children}
      </Styled.a>
    </Styled.h2>
  )
}

export default PostListTitle
