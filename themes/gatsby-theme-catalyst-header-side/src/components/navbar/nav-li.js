/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLi = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={{
        mb: 3,
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

          "::before": {
            left: "-4px",
            bottom: "0",
            height: "100%",
            width: "4px",
            backgroundColor: "primary",
            transform: "scaleY(0)",
            content: "''",
            position: "absolute",
            transition: "transform .2s ease",
          },
          ":hover::before": {
            transform: "scaleY(1)",
          },
        },
        ".active::before": {
          left: "-4px",
          bottom: "0",
          height: "100%",
          width: "4px",
          backgroundColor: "primary",
          transform: "scaleY(1)",
          content: "''",
          position: "absolute",
        },
        variant: "variants.navLinkStyles",
      }}
    >
      {children}
    </li>
  )
}

export default NavLi
