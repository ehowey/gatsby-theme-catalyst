/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import MobileButton from "./navbar/nav-mobile-button"
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
      }}
      id="header"
    >
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          alignSelf: "start",
          display: "grid",
          gridTemplateColumns: ["60px auto 60px", null, "1fr", null, null],
          gridTemplateRows: ["auto", null, "auto auto", null, null],
          p: [1, null, 3, null, null],
          pb: isNavOpen ? 4 : 0,
        }}
      >
        <Branding />
        <Nav />
        <MobileButton />
      </div>
    </header>
  )
}

export default SiteHeader
