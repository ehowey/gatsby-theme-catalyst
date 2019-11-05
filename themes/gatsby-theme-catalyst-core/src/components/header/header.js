/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeaderLayout from "./header-layout"
import HeaderHero from "./header-hero"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import { NavContext } from "../../contexts/nav-context"
import { HeaderHeightContext } from "../../contexts/header-height-context"

const SiteHeader = () => {
  // eslint-disable-next-line
  const [headerHeight, setHeaderHeight] = useContext(HeaderHeightContext)
  const [isNavOpen] = useContext(NavContext)

  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        headerPosition
        mobileMenuBreakpoint
      }
    }
  `)

  const headerRef = useCallback(
    node => {
      if (node !== null) {
        setHeaderHeight(node.getBoundingClientRect().height)
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <header
      ref={headerRef}
      sx={{
        display: "grid",
        position: data.catalystConfig.headerPosition,
        top: 0,
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen ? "header.backgroundOpen" : "header.background",
      }}
    >
      <HeaderLayout>
        <Branding />
        <Nav />
      </HeaderLayout>
      <HeaderHero />
    </header>
  )
}

export default SiteHeader
