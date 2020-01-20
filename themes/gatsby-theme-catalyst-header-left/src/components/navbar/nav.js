/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"

const NavLayout = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)
  const [isMobile] = useContext(MobileContext)

  return (
    <nav
      sx={{
        mt: 3,
        gridColumn: isMobile ? "1 / -1" : "1 / 1",
        gridRow: "2 / 3",
        display: isNavOpen ? "flex" : isMobile ? "none" : "flex",
        flexDirection: "column",
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      {children}
    </nav>
  )
}

export default NavLayout
