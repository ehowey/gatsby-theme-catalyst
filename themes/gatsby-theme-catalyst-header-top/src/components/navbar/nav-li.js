/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLi = ({ children, hasSubmenu }) => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={{
        my: [2, null, 0, null, null],
        mr: [0, null, 3, null, null],
        cursor: "pointer",
        a: {
          position: "relative",
          py: 2,
          px: 1,
          color: isNavOpen ? "header.textOpen" : "header.text",
          textDecoration: "none",
          fontWeight: "bold",
          letterSpacing: "1px",
          zIndex: 2,

          "::after": {
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            height: "1px",
            backgroundColor: "primary",
            content: "''",
            opacity: "0",
            transition: "height 0.3s, opacity 0.3s, transform 0.3s",
            transform: "translateY(-6px)",
          },

          ":hover::after, :focus::after": {
            height: "4px",
            opacity: "1",
            transform: "translateY(0px)",
          },

          ":hover > ul": {
            visibility: "visible",
            opacity: "1",
            display: "block",
          },
        },
        ".active::after": {
          position: "absolute",
          top: "100%",
          left: "0",
          width: "100%",
          height: "4px",
          backgroundColor: "primary",
          content: "''",
          opacity: "1",
          transform: "translateY(0px)",
        },
        ":hover > ul, :focus-within > ul": {
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
