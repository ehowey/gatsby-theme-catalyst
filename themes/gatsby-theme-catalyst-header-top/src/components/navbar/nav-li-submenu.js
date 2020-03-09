/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLiDropdown = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={{
        display: "block",
        mb: isNavOpen ? 1 : 3,
        ":hover": {
          cursor: "pointer",
        },
        a: {
          fontSize: isNavOpen ? 1 : 2,
          "::after": {
            content: "none",
          },
          ":hover::after": {
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
