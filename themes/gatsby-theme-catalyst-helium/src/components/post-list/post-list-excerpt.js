/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostListExcerpt = ({ children }) => {
  return (
    <Styled.p
      sx={{
        variant: "variants.postListExcerpt",
      }}
    >
      {children}
    </Styled.p>
  )
}

export default PostListExcerpt
