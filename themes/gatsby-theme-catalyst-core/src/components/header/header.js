/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useCallback } from "react"
import HeaderLayout from "./header-layout"
import HeaderHero from "./header-hero"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import { NavContext } from "../../contexts/nav-context"
import { HeaderHeightContext } from "../../contexts/header-height-context"
import { useCatalystConfig } from "../../utils/use-catalyst-config"

const SiteHeader = () => {
  // eslint-disable-next-line
  const [headerHeight, setHeaderHeight] = useContext(HeaderHeightContext)
  const [isNavOpen] = useContext(NavContext)
  const { headerPosition } = useCatalystConfig()

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
        position: headerPosition,
        top: 0,
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
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
