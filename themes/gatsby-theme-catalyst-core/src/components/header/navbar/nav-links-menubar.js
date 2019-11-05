/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "../../../contexts/mobile-context"

const NavMenuBar = props => {
  const [isMobile] = useContext(MobileContext)

  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap",
        textAlign: isMobile ? "center" : "left",
        listStyle: "none",
        m: 0,
        p: 0,
        ".active::after": {
          position: "absolute",
          top: "100%",
          left: "0",
          width: "100%",
          height: "4px",
          backgroundColor: "secondary",
          content: "''",
          opacity: "1",
          transform: "translateY(0px)",
        },
      }}
      aria-label="menu-bar"
      role="menubar"
    >
      {props.children}
    </ul>
  )
}

export default NavMenuBar
