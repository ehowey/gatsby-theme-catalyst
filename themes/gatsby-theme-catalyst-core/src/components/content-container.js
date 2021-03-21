/** @jsx jsx */
import { jsx } from "theme-ui"

const ContentContainer = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns:
          "minmax(0, 1fr)  min(60ch, calc(100% - 32px)) minmax(0, 1fr)",
        "> *": { gridColumn: 2 },
        gridGap: "16px",
        variant: "variants.contentContainer",
      }}
    >
      {children}
    </div>
  )
}

export default ContentContainer
