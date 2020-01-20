/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"

const SiteContainer = ({ children }) => {
  const [isMobile] = useContext(MobileContext)
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: isMobile
          ? "minmax(0, 1fr)"
          : "auto minmax(0, 1fr)",
        gridTemplateRows: isMobile
          ? "auto minmax(0, 1fr) auto"
          : "minmax(0, 1fr) auto",
        gridTemplateAreas: isMobile
          ? `
        "header"
        "main"
        "footer"
        `
          : `
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
