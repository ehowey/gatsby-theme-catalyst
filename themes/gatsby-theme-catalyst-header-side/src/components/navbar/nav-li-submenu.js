/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLiDropdown = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)
  return (
    <li
      sx={{
        lineHeight: "tight",
        mb: 2,
        ":last-child": {
          mb: 0,
        },
        a: {
          p: 0,
          fontSize: 1,
          color: isNavOpen ? "header.textOpen" : "header.text",
          ":hover, :focus, :active": {
            textDecoration: "underline",
            color: "primary",
          },
          variant: "variants.navLinkSub",
        },
        ".active": {
          textDecoration: "underline",
          color: "primary",
          variant: "variants.navLinkSubActive",
        },
        variant: "variants.navLiSub",
      }}
    >
      {children}
    </li>
  )
}

export default NavLiDropdown
