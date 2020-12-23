/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavLinks from "./nav-links"
import NavIcons from "./nav-icons"

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
      <NavIcons />
      <NavLinks />
    </nav>
  )
}

export default NavLayout
