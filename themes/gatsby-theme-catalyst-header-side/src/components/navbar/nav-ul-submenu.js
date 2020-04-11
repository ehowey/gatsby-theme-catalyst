/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavUlDropdown = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)

  return (
    <ul
      sx={{
        m: 0,
        p: 0,
        pl: 2,
        listStyle: "none",
      }}
      aria-label="submenu"
    >
      {children}
    </ul>
  )
}

export default NavUlDropdown
