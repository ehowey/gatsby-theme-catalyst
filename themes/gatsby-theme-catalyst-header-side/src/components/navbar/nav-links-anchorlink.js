/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { Link as AnchorLink } from "react-scroll"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuAnchorLink = ({ link, children }) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <AnchorLink
      to={link.replace(/#/g, "").toLowerCase().replace(/\s+/g, "-")}
      onClick={() => setIsNavOpen(false)}
      spy={true}
      smooth={true}
      activeClass="active"
      duration={500}
      offset={-20}
      tabIndex="0"
      role="menuitem"
    >
      {children}
    </AnchorLink>
  )
}

export default NavMenuAnchorLink
