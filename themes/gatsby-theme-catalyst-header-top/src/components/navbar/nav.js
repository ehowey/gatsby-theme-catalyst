/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavLinks from "./nav-links"
import NavSocialLinks from "./nav-social"

const Nav = () => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", null, "2 / 3", null, null],
        gridRow: ["2 / 3", null, "1 / 2", null, null],
        justifySelf: ["center", null, "end", null, null],
        alignSelf: ["start", null, "center", null, null],
        alignItems: "center",
        mt: isNavOpen ? 2 : 0,
        display: [isNavOpen ? "flex" : "none", null, "flex", null, null],
        flexDirection: ["column", null, "row", null, null],
      }}
    >
      <NavLinks />
      <NavSocialLinks />
    </nav>
  )
}

export default Nav
