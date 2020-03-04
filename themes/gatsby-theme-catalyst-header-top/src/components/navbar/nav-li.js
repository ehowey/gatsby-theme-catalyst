/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLi = ({ children, hasSubmenu }) => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={{
        my: isMobile ? 2 : 0,
        mr: isMobile ? 0 : 3,
        cursor: "pointer",
        fontFamily: "navLinks",
        a: {
          position: "relative",
          py: 2,
          px: 1,
          color: isNavOpen ? "header.textOpen" : "header.text",
          textDecoration: "none",
          fontWeight: "bold",
          letterSpacing: "1px",
          zIndex: 2,
          ":hover": {
            textDecoration: "underline",
            color: "primary",
          },
          ":hover > ul": {
            visibility: "visible",
            opacity: "1",
            display: "block",
          },
        },
        ".active": {
          textDecoration: "underline",
        },
        ":hover > ul": {
          visibility: "visible",
          opacity: "1",
          display: "block",
        },
        variant: "variants.navLinkStyles",
      }}
      aria-haspopup={hasSubmenu}
    >
      {children}
    </li>
  )
}

export default NavLi
