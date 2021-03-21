/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavMenu from "./nav-menu"
import SocialIcons from "./social-icons"

const NavLayout = () => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <nav
      sx={{
        gridColumn: "1 / -1",
        gridRow: "2 / 3",
        display: isNavOpen ? "flex" : ["none", null, "flex", null, null],
        flexDirection: "column",
        alignItems: ["center", null, "start", null, null],
        variant: "variant.nav",
      }}
      aria-label="Primary menu"
    >
      <SocialIcons />
      <NavMenu />
    </nav>
  )
}

export default NavLayout
