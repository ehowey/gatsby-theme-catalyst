/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteContainer = ({ children }) => {
  const [isMobile] = useContext(MobileContext)
  const { isHeaderSideLeft } = useCatalystConfig()
  return (
    <div
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: isMobile
          ? "minmax(0, 1fr)"
          : isHeaderSideLeft
          ? "auto minmax(0, 1fr)"
          : "minmax(0, 1fr) auto",
        gridTemplateRows: isMobile
          ? "auto minmax(0, 1fr) auto"
          : "minmax(0, 1fr) auto",
        gridTemplateAreas: isMobile
          ? `
        "header"
        "main"
        "footer"
        `
          : isHeaderSideLeft
          ? `
        "header main"
        "header footer"
        `
          : `
        "main header"
        "footer header"
        `,
        variant: "variants.siteContainer",
      }}
    >
      {children}
    </div>
  )
}

export default SiteContainer
