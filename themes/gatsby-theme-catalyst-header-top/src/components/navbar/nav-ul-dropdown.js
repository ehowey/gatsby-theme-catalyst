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
        listStyle: "none",
        m: 0,
        p: 0,
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        visibility: "hidden",
        opacity: "0",
        position: "absolute",
        transition: "all 0.5s ease",
        marginTop: "1rem",
        display: "none",

        ":hover": {
          visibility: "visible",
          opacity: "1",
          display: "block",
        },
      }}
    >
      {children}
    </ul>
  )
}

export default NavUlDropdown
