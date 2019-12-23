/** @jsx jsx */
import { jsx } from "theme-ui"

const PostListWrapper = props => {
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
      {props.children}
    </div>
  )
}

export default PostListWrapper
