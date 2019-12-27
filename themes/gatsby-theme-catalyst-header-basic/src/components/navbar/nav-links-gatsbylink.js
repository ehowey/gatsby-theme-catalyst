/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuLinkInternal = ({ link, children }) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <Link
      role="menuitem"
      to={link}
      activeClassName="active"
      onClick={() => setIsNavOpen(false)}
    >
      {children}
    </Link>
  )
}

export default NavMenuLinkInternal
