/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ node }) => {
  if (!node.asset) {
    return null
  }

  return (
    <blockquote
      sx={{
        color: "red",
      }}
    >
      {node.style.blockquote}
    </blockquote>
  )
}
