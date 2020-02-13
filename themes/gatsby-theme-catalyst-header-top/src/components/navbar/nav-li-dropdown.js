/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLiDropdown = ({ children }) => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen] = useContext(NavContext)

  return <li sx={{}}>{children}</li>
}

export default NavLiDropdown
