/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavUlDropdown = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <ul
      sx={{
        position: isNavOpen ? "static" : "absolute",
        m: 0,
        p: 0,
        pt: isNavOpen ? 1 : 3,
        px: 2,
        listStyle: "none",
        visibility: isNavOpen ? "visible" : "hidden",
        display: isNavOpen ? "block" : "none",
        opacity: isNavOpen ? "1" : "0",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
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
