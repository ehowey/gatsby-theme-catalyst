/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"
import NavLinks from "./nav-links"
import NavSocialLinks from "./nav-social"

const NavLayout = () => {
  const [isNavOpen] = useContext(NavContext)
  const [isMobile] = useContext(MobileContext)

  return (
    <nav
      sx={{
        mt: 4,
        gridColumn: isMobile ? "1 / -1" : "1 / 1",
        gridRow: "2 / 3",
        display: isNavOpen ? "flex" : isMobile ? "none" : "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <NavLinks />
      <NavSocialLinks />
    </nav>
  )
}

export default NavLayout
