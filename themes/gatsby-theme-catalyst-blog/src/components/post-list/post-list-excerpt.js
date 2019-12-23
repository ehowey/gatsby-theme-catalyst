/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostListExcerpt = props => {
  return (
    <Styled.p
      sx={{
        variant: "variants.postListExcerpt",
      }}
    >
      {props.children}
    </Styled.p>
  )
}

export default PostListExcerpt
