/** @jsx jsx */
import { jsx } from "theme-ui"

const PostListContainer = ({ children }) => {
  return (
    <div
      sx={{
        variant: "variants.postListContainer",
      }}
    >
      {children}
    </div>
  )
}

export default PostListContainer
