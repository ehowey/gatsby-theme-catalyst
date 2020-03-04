/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavUlDropdown = ({ children }) => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen] = useContext(NavContext)

  return (
    <ul
      sx={{
        position: isMobile && isNavOpen ? "static" : "absolute",
        m: 0,
        p: 0,
        pt: isMobile && isNavOpen ? 1 : 3,
        listStyle: "none",
        visibility: isMobile && isNavOpen ? "visible" : "hidden",
        display: isMobile && isNavOpen ? "block" : "none",
        opacity: isMobile && isNavOpen ? "1" : "0",
        backgroundColor:
          isMobile && isNavOpen ? "header.backgroundOpen" : "header.background",
        transition: "all 0.5s ease",
        zIndex: 1,
        minWidth: "8rem",
        ":hover": {
          visibility: "visible",
          opacity: "1",
          display: "block",
        },
      }}
      aria-label="submenu"
    >
      {children}
    </ul>
  )
}

export default NavUlDropdown
