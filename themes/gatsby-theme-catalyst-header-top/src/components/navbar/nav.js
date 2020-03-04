/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"
import NavLinks from "./nav-links"
import NavSocialLinks from "./nav-social"

const Nav = () => {
  const [isNavOpen] = useContext(NavContext)
  const [isMobile] = useContext(MobileContext)

  return (
    <nav
      sx={{
        gridColumn: isMobile ? "1 / -1" : "2 / 3",
        gridRow: isMobile ? "2 / 3" : "1 / 2",
        justifySelf: isMobile ? "center" : "end",
        alignSelf: isMobile ? "start" : "center",
        alignItems: "center",
        mt: isMobile && isNavOpen ? 2 : 0,
        display: isMobile ? (isNavOpen ? "flex" : "none") : "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <NavLinks />
      <NavSocialLinks />
    </nav>
  )
}

export default Nav
