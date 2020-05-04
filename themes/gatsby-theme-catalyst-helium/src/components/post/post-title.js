/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostTitle = ({ children }) => {
  return (
    <Styled.h1
      sx={{
        fontFamily: "serif",
        fontSize: 8,
        textAlign: "center",
        variant: "variants.postTitle",
      }}
    >
      {children}
    </Styled.h1>
  )
}

export default PostTitle
