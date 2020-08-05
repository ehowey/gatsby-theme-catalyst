/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"

const SiteContainer = ({ children }) => {
  const { theme } = useThemeUI()
  const maxWidth = theme.sizes.maxContentWidth
  const maxGrid = `minmax(0, 1fr) auto ${maxWidth} minmax(0, 1fr)`
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridColumnGap: 2,
        gridTemplateColumns: ["minmax(0, 1fr)", null, null, maxGrid, null],
        gridTemplateRows: [
          "auto minmax(0, 1fr) auto",
          null,
          null,
          "minmax(0, 1fr)",
          null,
        ],
        gridTemplateAreas: [
          `
        "header" 
        "main"
        "footer"
        `,
          null,
          null,
          `
        ". header main . "
        "footer footer footer footer"
        `,
          null,
        ],
        variant: "variants.siteContainer",
      }}
    >
      {children}
    </div>
  )
}

export default SiteContainer
