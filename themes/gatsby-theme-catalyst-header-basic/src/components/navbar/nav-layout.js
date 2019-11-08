/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"

const NavLayout = props => {
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
        mt: isNavOpen ? 2 : 0,
        display: isMobile ? (isNavOpen ? "flex" : "none") : "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      {props.children}
    </nav>
  )
}

export default NavLayout
