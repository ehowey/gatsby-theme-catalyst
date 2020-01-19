/** @jsx jsx */
import { jsx } from "theme-ui"

const ContentContainer = ({ children }) => {
  return (
    <div
      sx={{
        width: "100%",
        ml: "auto",
        mr: "auto",
        variant: "variants.contentContainer",
      }}
    >
      {children}
    </div>
  )
}

export default ContentContainer
