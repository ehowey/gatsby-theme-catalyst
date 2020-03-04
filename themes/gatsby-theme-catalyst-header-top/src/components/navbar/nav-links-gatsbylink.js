/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuLinkInternal = ({ link, hasSubmenu, children }) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <Link
      to={link}
      activeClassName="active"
      onClick={() => setIsNavOpen(false)}
    >
      {children} <span sx={{ fontSize: "80%" }}>{hasSubmenu && "\u25BC"}</span>
    </Link>
  )
}

export default NavMenuLinkInternal
