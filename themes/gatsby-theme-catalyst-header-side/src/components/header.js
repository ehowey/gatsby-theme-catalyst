/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import Branding from "./branding"
import Nav from "./nav"
import HamburgerButton from "./hamburger-button"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useStickyHeader } = useCatalystConfig()
  return (
    <header
      sx={{
        display: "grid",
        position: useStickyHeader ? "sticky" : "static",
        top: 0,
        width: "100%",
        height: useStickyHeader
          ? ["auto", null, "100vh", null, null]
          : ["auto", null, "100%", null, null],
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        gridArea: "header",
        overflowY: "scroll",
        zIndex: "888", // Ensure the header is always on top
        minHeight: isNavOpen ? "100vh" : "auto",
        variant: "variants.header",
      }}
      id="header"
    >
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          alignSelf: "start",
          display: "grid",
          gridTemplateColumns: [
            "minmax(0, 1fr) auto",
            null,
            "minmax(0, 1fr)",
            null,
            null,
          ],
          gridTemplateRows: "auto",
          p: [1, null, 3, null, null],
          pb: isNavOpen ? 4 : 0,
        }}
      >
        <Branding />
        <Nav />
        <HamburgerButton />
      </div>
    </header>
  )
}

export default SiteHeader
