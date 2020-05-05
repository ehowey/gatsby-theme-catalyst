/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLi = ({ children, hasSubmenu }) => {
  const [isNavOpen] = useContext(NavContext)
  return (
    <li
      sx={{
        my: [1, null, 0, null, null],
        mr: [0, null, 3, null, null],
        cursor: "pointer",
        ":hover > ul, :focus-within > ul": {
          visibility: "visible",
          opacity: "1",
          display: "block",
        },
        ":last-child": {
          mr: 0,
        },
        a: {
          position: "relative",
          py: 2,
          px: 1,
          color: isNavOpen ? "header.textOpen" : "header.text",
          textDecoration: "none",
          fontWeight: "bold",
          letterSpacing: "1px",
          zIndex: 2,
          ":hover, :focus, :active": {
            textDecoration: "underline",
            textDecorationThickness: "0.125em",
            color: "primary",
          },
          ":hover > ul": {
            visibility: "visible",
            opacity: "1",
            display: "block",
          },
          variant: "variants.navLink",
        },
        ".active": {
          textDecoration: "underline",
          textDecorationThickness: "0.125em",
          color: "primary",
          variant: "variants.navLinkActive",
        },
      }}
      aria-haspopup={hasSubmenu}
    >
      {children}
    </li>
  )
}

export default NavLi
