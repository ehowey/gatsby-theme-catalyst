/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"

const NavUl = ({ children }) => {
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
        "li:hover > ul": {
          visibility: "visible",
          opacity: "1",
          display: "block",
        },
      }}
    >
      {children}
    </ul>
  )
}

export default NavUl
