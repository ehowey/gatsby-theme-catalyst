/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"

const ContentContainer = ({ children }) => {
  const { theme } = useThemeUI()
  const contentWidth = theme.sizes.maxContentWidth
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: `minmax(0, 1fr)  min(${contentWidth}, calc(100% - 32px)) minmax(0, 1fr)`,
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
