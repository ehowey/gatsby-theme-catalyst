/** @jsx jsx */
import { jsx } from "theme-ui"

const ContentContainer = ({ children }) => {
  return (
    <div
      sx={{
        maxWidth: "maxContentWidth",
        width: "contentWidth",
        mt: 3,
        mb: 5,
        mx: "auto",
        variant: "variants.contentContainer",
      }}
    >
      {children}
    </div>
  )
}

export default ContentContainer
