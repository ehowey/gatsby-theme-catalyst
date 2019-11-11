/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"

const NavMenuBar = props => {
  const [isMobile] = useContext(MobileContext)

  return (
    <li
      sx={{
        my: isMobile ? 2 : 0,
        mx: 1,
      }}
      role="none"
    >
      {props.children}
    </li>
  )
}

export default NavMenuBar
