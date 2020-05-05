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
      }}
    >
      {children}
    </ul>
  )
}

export default NavUl
