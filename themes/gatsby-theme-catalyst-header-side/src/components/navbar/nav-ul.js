/** @jsx jsx */
import { jsx } from "theme-ui"

const NavUl = ({ children }) => {
  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
        m: 0,
        p: 0,
        variant: "variants.navUl",
      }}
      role="menubar" // eslint-disable-line
      aria-orientation="vertical"
      aria-label="Main navigation menu"
    >
      {children}
    </ul>
  )
}

export default NavUl
