/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const PostListTitle = ({ link, children }) => {
  return (
    <Styled.h2
      sx={{
        my: 1,
        fontFamily: "serif",
        fontSize: 4,
        variant: "variants.postListTitle",
      }}
    >
      <Styled.a sx={{ color: "text" }} as={Link} to={link}>
        {children}
      </Styled.a>
    </Styled.h2>
  )
}

export default PostListTitle
