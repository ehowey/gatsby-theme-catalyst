/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "../../../contexts/nav-context"
import { MobileContext } from "../../../contexts/mobile-context"

const NavLayout = props => {
  const [isNavOpen] = useContext(NavContext)

  const [mobile] = useContext(MobileContext)

  return (
    <nav
      sx={{
        gridColumn: mobile ? "1 / -1" : "2 / 3",
        gridRow: mobile ? "2 / 3" : "1 / 2",
        justifySelf: mobile ? "center" : "end",
        alignSelf: mobile ? "start" : "center",
        alignItems: "center",
        mt: isNavOpen ? 2 : 0,
        display: mobile ? (isNavOpen ? "flex" : "none") : "flex",
        flexDirection: mobile ? "column" : "row",
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      {props.children}
    </nav>
  )
}

export default NavLayout
