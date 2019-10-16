/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Branding from "./navbar/branding"
import Nav from "./navbar/nav-layout"
import MobileButton from "./navbar/mobile-button"
import { NavContext } from "./contexts/nav-context"
import { HeaderHeightContext } from "./contexts/header-height-context"

const SiteHeader = () => {
  const [open] = useContext(NavContext)
  // eslint-disable-next-line
  const [headerHeight, setHeaderHeight] = useContext(HeaderHeightContext)
  const header = useRef(null)

  useEffect(() => {
    setHeaderHeight(header.current.clientHeight)
  }, [setHeaderHeight])
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerPosition
        mobileMenuBreakpoint
      }
    }
  `)

  return (
    <header
      ref={header}
      sx={{
        position: data.catalystConfig.headerPosition,
        top: 0,
        width: "100%",
        color: open ? "header.textOpen" : "header.text",
        backgroundColor: open ? "header.backgroundOpen" : "header.background",
        zIndex: "999",
      }}
    >
      <div
        sx={{
          maxWidth: "maxPageWidth",
          width: "100%",
          height: open ? "100vh" : "auto",
          m: "0 auto",
          px: 3,
          display: "grid",
          alignItems: open ? "start" : "center",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: ["auto 1fr", "auto", null],
        }}
      >
        <Branding />
        <MobileButton />
        <Nav />
      </div>
    </header>
  )
}

export default SiteHeader
