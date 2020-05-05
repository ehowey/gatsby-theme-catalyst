/** @jsx jsx */
import { jsx } from "theme-ui"

const PostListContainer = ({ children }) => {
  return (
    <div
      sx={{
        p: 3,
        width: "100vw",
        position: "relative",
        left: "calc(-50vw + 50%)",
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
        gridAutoRows: "350px",
        variant: "variants.postListContainer",
      }}
    >
      {children}
    </div>
  )
}

export default PostListContainer
