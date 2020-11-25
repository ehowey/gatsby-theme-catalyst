/** @jsx jsx */
import { jsx } from "theme-ui"

const NavUl = ({ children }) => {
  return (
    <div
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        justifyContent: [null, null, "space-between", null, null],
        flexWrap: "wrap",
        textAlign: ["center", null, "left", null, null],
        variant: "variants.navUl",
      }}
    >
      {children}
    </div>
  )
}

export default NavUl
