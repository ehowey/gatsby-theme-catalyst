/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostMeta = ({ children }) => {
  return (
    <Styled.p
      sx={{
        color: "grey",
        fontFamily: "serif",
        letterSpacing: "wider",
        textAlign: "center",
        a: {
          color: "grey",
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        },
        variant: "variants.postMeta",
      }}
    >
      {children}
    </Styled.p>
  )
}

export default PostMeta
