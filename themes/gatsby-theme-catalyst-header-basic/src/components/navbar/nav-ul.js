/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"

const NavMenuBar = ({ children }) => {
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
      }}
      aria-label="menu-bar"
      role="menubar"
    >
      {children}
    </ul>
  )
}

export default NavMenuBar
