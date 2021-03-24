/** @jsx jsx */
import { jsx } from "theme-ui"

const ContentContainer = ({ children }) => {
  return (
    <div
      sx={{
        maxWidth: "maxContentWidth",
        my: 0,
        mx: "auto",
        px: 3,
        variant: "variants.contentContainer",
      }}
    >
      {children}
    </div>
  )
}

export default ContentContainer
