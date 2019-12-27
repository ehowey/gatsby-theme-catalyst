/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuLinkInternal = ({ to, text }) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <Link
      role="menuitem"
      to={to}
      activeClassName="active"
      onClick={() => setIsNavOpen(false)}
    >
      {text}
    </Link>
  )
}

export default NavMenuLinkInternal
