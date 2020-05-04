/** @jsx jsx */
import { jsx } from "theme-ui"

const PostListContainer = ({ children }) => {
  return (
    <div
      sx={{
        my: 5,
        width: "100%",
        position: "relative",
        left: "calc(-50% + 50%)",
        variant: "variants.postListContainer",
      }}
    >
      {children}
    </div>
  )
}

export default PostListContainer
