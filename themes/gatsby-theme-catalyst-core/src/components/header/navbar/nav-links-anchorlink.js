/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { Link as AnchorLink } from "react-scroll"
import { NavContext } from "../../../contexts/nav-context"
import { MobileContext } from "../../../contexts/mobile-context"
import { HeaderHeightContext } from "../../../contexts/header-height-context"

const NavMenuAnchorLink = props => {
  const [open, setOpen] = useContext(NavContext)
  const [mobile] = useContext(MobileContext)
  const [headerHeight] = useContext(HeaderHeightContext)
  const navOffset = -Math.abs(headerHeight + 16)

  return (
    <li
      sx={{
        my: mobile ? 2 : 0,
        mx: 1,
      }}
      role="none"
    >
      <AnchorLink
        sx={{
          color: open ? "header.textOpen" : "header.text",
          textDecoration: "none",
          py: 2,
          px: 1,
          mr: mobile ? 0 : 3,
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
        onClick={() => setOpen(false)}
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
    </li>
  )
}

export default NavMenuAnchorLink
