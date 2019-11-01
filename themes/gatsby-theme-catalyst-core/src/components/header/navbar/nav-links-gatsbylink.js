/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { MobileContext } from "../../../contexts/mobile-context"
import { NavContext } from "../../../contexts/nav-context"

const NavMenuLinkInternal = props => {
  const [mobile] = useContext(MobileContext)
  const [open] = useContext(NavContext)
  return (
    <li
      sx={{
        my: mobile ? 2 : 0,
        mx: 1,
      }}
      role="none"
    >
      <Link
        sx={{
          color: open ? "header.textOpen" : "header.text",
          textDecoration: "none",
          py: 2,
          px: 1,
          mr: mobile ? 0 : 2,
          cursor: "pointer",
          position: "relative",
          fontFamily: "navLinks",
          fontWeight: "bold",
          letterSpacing: "1px",
          whiteSpace: "nowrap",
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
        role="menuitem"
        to={props.to}
        activeClassName="active"
      >
        {props.text}
      </Link>
    </li>
  )
}

export default NavMenuLinkInternal
