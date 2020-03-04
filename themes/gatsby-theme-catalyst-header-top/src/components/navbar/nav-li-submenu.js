/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLiDropdown = ({ children }) => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={{
        display: "block",
        mb: isMobile && isNavOpen ? 1 : 3,
        ":hover": {
          cursor: "pointer",
        },
        a: {
          fontSize: isMobile && isNavOpen ? 1 : 2,
          "::after": {
            content: "none",
          },
          ":hover, :focus": {
            color: "primary",
          },
        },
        ".active::after": {
          content: "none",
        },
        ".active": {
          color: "primary",
        },
      }}
    >
      {children}
    </li>
  )
}

export default NavLiDropdown
