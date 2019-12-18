/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuBar = props => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={{
        my: isMobile ? 2 : 0,
        mx: 1,
        variant: "variants.navLinkStyles",
        a: {
          color: isNavOpen ? "header.textOpen" : "header.text",
          textDecoration: "none",
          py: 2,
          px: 1,
          mr: isMobile ? 0 : 2,
          cursor: "pointer",
          position: "relative",
          fontWeight: "bold",
          letterSpacing: "1px",

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
      }}
      role="none"
    >
      {props.children}
    </li>
  )
}

export default NavMenuBar
