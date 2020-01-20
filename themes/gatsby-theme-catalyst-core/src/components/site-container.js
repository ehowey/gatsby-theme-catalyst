/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteContainer = ({ children }) => {
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gridTemplateRows: "auto minmax(0, 1fr) auto",
        gridTemplateAreas: `
        "header" 
        "main"
        "footer"
        `,
        variant: "variants.siteContainer",
      }}
    >
      {children}
    </div>
  )
}

export default SiteContainer
