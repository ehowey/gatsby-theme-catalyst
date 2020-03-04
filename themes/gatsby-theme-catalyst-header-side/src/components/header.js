/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import MobileButton from "./navbar/nav-mobile-button"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const [isMobile] = useContext(MobileContext)
  const { useStickyHeader } = useCatalystConfig()
  return (
    <header
      sx={{
        display: "grid",
        position: useStickyHeader ? "sticky" : "static",
        top: 0,
        width: "100%",
        height: useStickyHeader
          ? isMobile
            ? "auto"
            : "100vh"
          : isMobile
          ? "auto"
          : "100%",
        color: isMobile && isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor:
          isMobile && isNavOpen ? "header.backgroundOpen" : "header.background",
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
          gridTemplateColumns: isMobile ? "60px auto 60px" : "1fr",
          gridTemplateRows: isMobile ? "auto" : "auto auto",
          p: isMobile ? 1 : 3,
          pb: isMobile && isNavOpen ? 4 : 0,
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
