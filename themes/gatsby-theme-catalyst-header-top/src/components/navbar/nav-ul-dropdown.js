/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"

const NavUlDropdown = ({ children }) => {
  const [isMobile] = useContext(MobileContext)

  return <ul sx={{}}>{children}</ul>
}

export default NavUlDropdown
