/** @jsx jsx */
import { jsx } from "theme-ui"

const NavUlDropdown = ({ children }) => {
  return (
    <ul
      sx={{
        m: 0,
        p: 0,
        pl: 3,
        listStyle: "none",
        variant: "variants.navUlSub",
      }}
      aria-label="submenu"
    >
      {children}
    </ul>
  )
}

export default NavUlDropdown
