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
      }}
    >
      {children}
    </ul>
  )
}

export default NavUl
