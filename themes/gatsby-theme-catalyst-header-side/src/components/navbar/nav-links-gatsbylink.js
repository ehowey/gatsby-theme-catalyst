/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MdKeyboardArrowDown } from "react-icons/md"

const NavMenuLinkInternal = ({ link, hasSubmenu, children }) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <Link
      to={link}
      activeClassName="active"
      onClick={() => setIsNavOpen(false)}
    >
      {children}
      {hasSubmenu && <MdKeyboardArrowDown sx={{ mb: -1 }} />}
    </Link>
  )
}

export default NavMenuLinkInternal
