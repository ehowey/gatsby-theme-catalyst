/** @jsx jsx */
import { jsx } from "theme-ui"

const PostListWrapper = ({ children }) => {
  return (
    <article
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        // ":nth-child(1)": {
        //   gridColumn: "1 / -1",
        // },
        // ":nth-child(16n + 2)": {
        //   gridColumn: "-3 / -1",
        // },
        // ":nth-child(16n + 10)": {
        //   gridColumn: "1 / -2",
        // },
        variant: "variants.postListWrapper",
      }}
    >
      {children}
    </article>
  )
}

export default PostListWrapper
