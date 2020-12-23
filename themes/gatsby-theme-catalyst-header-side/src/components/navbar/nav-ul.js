/** @jsx jsx */
import { jsx } from "theme-ui"

const NavUl = ({ children }) => {
  return (
    <ul
      sx={{
        display: "flex",
        alignItems: ["center", null, "start", null, null],
        flexDirection: "column",
        listStyle: "none",
        m: 0,
        p: 0,
        variant: "variants.navUl",
      }}
    >
      {children}
    </ul>
  )
}

export default NavUl
