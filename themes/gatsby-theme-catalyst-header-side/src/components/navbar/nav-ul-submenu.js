/** @jsx jsx */
import { jsx } from "theme-ui"

const NavUlDropdown = ({ children }) => {
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
