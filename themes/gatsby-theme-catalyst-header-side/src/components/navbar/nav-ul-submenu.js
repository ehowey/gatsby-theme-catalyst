/** @jsx jsx */
import { jsx } from "theme-ui"

const NavUlDropdown = ({ children }) => {
  return (
    <ul
      sx={{
        m: 0,
        p: 0,
        pl: 1,
        listStyle: "none",
        variant: "variants.navUlSub",
      }}
      aria-label="Submenu"
    >
      {children}
    </ul>
  )
}

export default NavUlDropdown
