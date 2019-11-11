/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useState, useEffect } from "react"
import { Link as AnchorLink } from "react-scroll"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"

const NavMenuAnchorLink = props => {
  const isClient = typeof window === "object"
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const [isMobile] = useContext(MobileContext)
  const [headerHeight, setHeaderHeight] = useState(0)
  const navOffset = -Math.abs(headerHeight + 16)

  //eslint-disable-next-line
  useEffect(() => {
    if (isClient) {
      const header = document.getElementById("header")
      const headerHeight = header.getBoundingClientRect().height
      setHeaderHeight(headerHeight)
    }
  })

  return (
    <AnchorLink
      sx={{
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
          backgroundColor: "secondary",
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
      }}
      to={props.to.replace(/#/g, "").toLowerCase()}
      onClick={() => setIsNavOpen(false)}
      role="menuitem"
      spy={true}
      hashSpy={true}
      smooth={true}
      activeClass="active"
      duration={500}
      offset={navOffset}
    >
      {props.text}
    </AnchorLink>
  )
}

export default NavMenuAnchorLink
