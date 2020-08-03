/** @jsx jsx */
import { jsx } from "theme-ui"

const NavLi = ({ children }) => {
  return (
    <li
      sx={{
        cursor: "pointer",

        a: {
          py: 2,
          px: 1,
          color: "header.text",
          textDecoration: "none",
          fontWeight: "bold",
          letterSpacing: "1px",
          zIndex: 2,
          ":hover, :focus, :active": {
            textDecoration: "underline",
            textDecorationThickness: "0.125em",
            color: "primary",
          },
          variant: "variants.navLink",
        },
        ".active": {
          textDecoration: "underline",
          textDecorationThickness: "0.125em",
          color: "primary",
          variant: "variants.navLinkActive",
        },
        variant: "variants.navLi",
      }}
    >
      {children}
    </li>
  )
}

export default NavLi
