/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteContainer = ({ children }) => {
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: [
          "minmax(0, 1fr)",
          null,
          "auto minmax(0, 1fr)",
          null,
          null,
        ],
        gridTemplateRows: [
          "auto minmax(0, 1fr) auto",
          null,
          "minmax(0, 1fr) auto",
          null,
          null,
        ],
        gridTemplateAreas: [
          `
        "header"
        "alert"
        "main"
        "footer"
        `,
          null,
          `
        "alert alert"
        "header main"
        "header footer"
        `,
          null,
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
