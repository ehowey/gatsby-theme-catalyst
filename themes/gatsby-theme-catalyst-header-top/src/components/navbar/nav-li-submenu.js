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
          color: isNavOpen ? "header.textOpen" : "header.text",
          ":hover, :focus, :active": {
            textDecoration: "underline",
            color: "primary",
            textDecorationThickness: "0.125em",
          },
          variant: "variants.navLinkSub",
        },
        ".active": {
          textDecoration: "underline",
          textDecorationThickness: "0.125em",
          color: "primary",
          variant: "variants.navLinkSubActive",
        },
      }}
    >
      {children}
    </li>
  )
}

export default NavLiDropdown
