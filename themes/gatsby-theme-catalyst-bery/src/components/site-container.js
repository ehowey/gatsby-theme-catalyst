/** @jsx jsx */
import { Fragment, useContext } from "react"
import { jsx, useThemeUI } from "theme-ui"
import FloatingActionButton from "./floating-action-button"
import FloatingNav from "./floating-nav"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteContainer = ({ children }) => {
  const { useAlertBanner } = useCatalystConfig()
  const [isNavOpen] = useContext(NavContext)
  const { theme } = useThemeUI()
  const maxWidth = theme.sizes.maxContentWidth
  const maxGrid = `minmax(0, 1fr) auto ${maxWidth} minmax(0, 1fr)`
  return (
    <Fragment>
      <FloatingActionButton />
      {isNavOpen && <FloatingNav />}
      <div
        sx={{
          minHeight: "100vh",
          display: "grid",
          gridColumnGap: 2,
          gridTemplateColumns: ["minmax(0, 1fr)", null, null, maxGrid, null],
          gridTemplateRows: useAlertBanner
            ? [
                "auto auto minmax(0, 1fr) auto",
                null,
                null,
                "minmax(0, 1fr)",
                null,
              ]
            : ["auto minmax(0, 1fr) auto", null, null, "minmax(0, 1fr)", null],
          gridTemplateAreas: useAlertBanner
            ? [
                `
        "alert"
        "header" 
        "main"
        "footer"
        `,
                null,
                null,
                `
        "alert alert alert alert"
        ". header main . "
        "footer footer footer footer"
        `,
                null,
              ]
            : [
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
    </Fragment>
  )
}

export default SiteContainer
