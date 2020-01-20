/** @jsx jsx */
import { jsx } from "theme-ui"

const ContentContainer = ({ children }) => {
  return (
    <div
      sx={{
        maxWidth: "maxContentWidth",
        mt: 3,
        mb: 5,
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
