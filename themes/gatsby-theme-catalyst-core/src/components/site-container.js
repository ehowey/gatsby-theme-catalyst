/** @jsx jsx */
import { jsx } from "theme-ui"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteContainer = ({ children }) => {
  const { useAlertBanner } = useCatalystConfig()
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gridTemplateRows: useAlertBanner
          ? "auto auto minmax(0, 1fr) auto"
          : "auto minmax(0, 1fr) auto",
        gridTemplateAreas: useAlertBanner
          ? `
        "alert"
        "header" 
        "main"
        "footer"
        `
          : `
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
