/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLi = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={{
        mb: 2,
        a: {
          color: isNavOpen ? "header.textOpen" : "header.text",
          textDecoration: "none",
          py: 1,
          px: 1,
          cursor: "pointer",
          position: "relative",
          fontWeight: "bold",
          letterSpacing: "1px",
          transition: "all 0.3s ease",
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
      role="none"
    >
      {children}
    </li>
  )
}

export default NavLi
