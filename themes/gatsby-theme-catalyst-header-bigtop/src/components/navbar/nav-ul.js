/** @jsx jsx */
import { jsx } from "theme-ui"

const NavUl = ({ children }) => {
  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        flexWrap: "wrap",
        textAlign: ["center", null, "left", null, null],
        listStyle: "none",
        m: 0,
        p: 0,
        variant: "variants.navUl",
      }}
      role="menubar" // eslint-disable-line
      aria-label="Main navigation menu"
    >
      {children}
    </ul>
  )
}

export default NavUl
