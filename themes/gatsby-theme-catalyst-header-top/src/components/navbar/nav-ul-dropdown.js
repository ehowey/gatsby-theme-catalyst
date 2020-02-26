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
        position: "absolute",
        m: 0,
        p: 0,
        listStyle: "none",
        visibility: "hidden",
        display: "none",
        opacity: "0",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        transition: "all 0.5s ease",
        paddingTop: "1rem",
        zIndex: "-1",
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
