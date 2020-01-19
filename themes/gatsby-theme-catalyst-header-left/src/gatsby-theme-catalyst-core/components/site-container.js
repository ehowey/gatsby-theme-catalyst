/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteContainer = ({ children }) => {
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "1fr auto",
        gridTemplateAreas: `
        "header main" 
        "header footer"
        `,
        variant: "variants.siteContainer",
      }}
    >
      {children}
    </div>
  )
}

export default SiteContainer
