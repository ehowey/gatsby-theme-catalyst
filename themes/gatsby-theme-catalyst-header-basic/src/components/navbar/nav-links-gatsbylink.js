/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavMenuLinkInternal = props => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)

  return (
    <Link
      role="menuitem"
      to={props.to}
      activeClassName="active"
      onClick={() => setIsNavOpen(false)}
    >
      {props.text}
    </Link>
  )
}

export default NavMenuLinkInternal
