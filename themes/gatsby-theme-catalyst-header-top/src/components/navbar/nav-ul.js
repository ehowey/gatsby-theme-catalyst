/** @jsx jsx */
import { jsx } from "theme-ui"

const NavUl = ({ children }) => {
  return (
    <ul
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        justifyContent: [null, null, "space-between", null, null],
        flexWrap: "wrap",
        textAlign: ["center", null, "left", null, null],
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
