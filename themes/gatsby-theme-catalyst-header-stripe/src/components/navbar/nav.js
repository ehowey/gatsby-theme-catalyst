/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavLinks from "./nav-links"

const Nav = () => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <nav
      sx={{
        m: 0,
        display: [isNavOpen ? "flex" : "none", null, "flex", null, null],
        justifyContent: "center",
        flexDirection: ["column", null, "row", null, null],
        gridArea: "nav",
        transition: "all 3s ease-in-out",
        // height: isNavOpen ? "auto" : "0",
        variant: "variants.nav",
      }}
      aria-label="Primary menu"
    >
      <NavLinks />
    </nav>
  )
}

export default Nav
