/** @jsx jsx */
import { jsx } from "theme-ui"

const PostContainer = ({ children }) => {
  return (
    <article
      sx={{
        variant: "variants.postContainer",
      }}
    >
      {children}
    </article>
  )
}

export default PostContainer
