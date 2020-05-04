/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostSubTitle = ({ children }) => {
  return (
    <Styled.h2
      sx={{
        fontFamily: "serif",
        fontStyle: "italic",
        fontSize: 4,
        fontWeight: "normal",
        my: 0,
        mx: "auto",
        textAlign: "center",
        maxWidth: ["100%", "70%", "50%", null, null],
        lineHeight: "1.15em",
        variant: "variants.postSubTitle",
      }}
    >
      {children}
    </Styled.h2>
  )
}

export default PostSubTitle
