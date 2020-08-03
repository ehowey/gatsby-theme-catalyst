/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"

const SiteContainer = ({ children }) => {
  const { theme } = useThemeUI()
  const maxWidth = theme.sizes.maxContentWidth
  const maxGrid = `1fr ${maxWidth} 1fr`
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridColumnGap: 2,
        gridTemplateColumns: [
          "minmax(0, 1fr)",
          null,
          null,
          null,
          "minmax(0, 1fr) auto auto minmax(0, 1fr)",
        ],
        gridTemplateRows: [
          "auto minmax(0, 1fr) auto",
          null,
          null,
          null,
          "minmax(0, 1fr)",
        ],
        gridTemplateAreas: [
          `
        "header" 
        "main"
        "footer"
        `,
          null,
          null,
          null,
          `
        ". header main . "
        "footer footer footer footer"
        `,
        ],
        variant: "variants.siteContainer",
      }}
    >
      {children}
    </div>
  )
}

export default SiteContainer
