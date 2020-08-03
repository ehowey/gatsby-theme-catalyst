/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const NavMenuLinkInternal = ({ link, children }) => {
  return (
    <Link to={link} activeClassName="active">
      {children}
    </Link>
  )
}

export default NavMenuLinkInternal
