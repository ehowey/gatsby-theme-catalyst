/** @jsx jsx */
import { Fragment, useContext } from "react"
import { jsx, useThemeUI } from "theme-ui"
import FloatingActionButton from "./floating-action-button"
import FloatingNav from "./floating-nav"
import { NavContext } from "gatsby-theme-catalyst-core"

const SiteContainer = ({ children }) => {
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
    </Fragment>
  )
}

export default SiteContainer
