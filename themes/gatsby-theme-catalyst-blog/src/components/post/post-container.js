/** @jsx jsx */
import { jsx } from "theme-ui"

const PostContainer = props => {
  return (
    <div
      sx={{
        variant: "variants.postContainer",
      }}
    >
      {props.children}
    </div>
  )
}

export default PostContainer
