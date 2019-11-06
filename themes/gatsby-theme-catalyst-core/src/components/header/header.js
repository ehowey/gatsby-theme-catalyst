/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import HeaderLayout from "./header-layout"
import HeaderHero from "./header-hero"
import Branding from "./branding/branding"
import Nav from "./navbar/nav"
import { NavContext } from "../../contexts/nav-context"
import { useCatalystConfig } from "../../utils/use-catalyst-config"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const { headerPosition } = useCatalystConfig()

  return (
    <header
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
      id="header"
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
