/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeaderLayout from "./header-layout"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import { NavContext } from "../contexts/nav-context"
import { HeaderHeightContext } from "../contexts/header-height-context"

const SiteHeader = () => {
  // eslint-disable-next-line
  const [headerHeight, setHeaderHeight] = useContext(HeaderHeightContext)
  const [open] = useContext(NavContext)
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerPosition
        mobileMenuBreakpoint
      }
    }
  `)
  const headerRef = useRef(null)
  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight)
  })
  return (
    <header
      ref={headerRef}
      sx={{
        position: data.catalystConfig.headerPosition,
        top: 0,
        width: "100%",
        color: open ? "header.textOpen" : "header.text",
        backgroundColor: open ? "header.backgroundOpen" : "header.background",
        zIndex: "999",
      }}
    >
      <HeaderLayout>
        <Branding />
        <Nav />
      </HeaderLayout>
    </header>
  )
}

export default SiteHeader
