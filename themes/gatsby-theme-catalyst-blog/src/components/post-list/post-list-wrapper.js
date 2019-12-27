/** @jsx jsx */
import { jsx } from "theme-ui"

const PostListWrapper = ({ children }) => {
  return (
    <div
      sx={{
        mb: 5,
        ":last-of-type": {
          mb: 0,
        },
        variant: "variants.postListWrapper",
      }}
    >
      {children}
    </div>
  )
}

export default PostListWrapper
