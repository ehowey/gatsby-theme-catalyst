/** @jsx jsx */
import { jsx } from "theme-ui"

const PostListContainer = props => {
  return (
    <div
      sx={{
        variant: "variants.postListContainer",
      }}
    >
      {props.children}
    </div>
  )
}

export default PostListContainer
