/** @jsx jsx */
import { jsx } from "theme-ui"

const PostContainer = ({ children }) => {
  return (
    <div
      sx={{
        variant: "variants.postContainer",
      }}
    >
      {children}
    </div>
  )
}

export default PostContainer
