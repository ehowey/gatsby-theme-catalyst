/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuBar = ({ children }) => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={{
        mb: 3,
        fontFamily: "navLinks",
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
          transition: "all 0.3s ease",

          "::before": {
            left: "0",
            bottom: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "primary",
            transform: "scaleX(0)",
            content: "''",
            position: "absolute",
            transition: "transform .3s ease",
          },
          ":hover::before": {
            transform: "scaleX(1)",
          },
        },
        ".active::before": {
          left: "0",
          bottom: "0",
          width: "100%",
          height: "2px",
          backgroundColor: "primary",
          content: "''",
          position: "absolute",
          transform: "scaleX(1)",
        },
        variant: "variants.navLinkStyles",
      }}
    >
      {children}
    </li>
  )
}

export default NavMenuBar
