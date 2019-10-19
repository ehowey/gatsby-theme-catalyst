/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "../contexts/nav-context"

const HeaderLayout = props => {
  const [open] = useContext(NavContext)
  const { theme } = useThemeUI()

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: [
          theme.sizes.headerHeight + " 1fr",
          theme.sizes.headerHeight,
          theme.sizes.headerHeight,
        ],
        maxWidth: "maxPageWidth",
        width: "100%",
        height: open ? "100vh" : "auto",
        m: "0 auto",
        px: [1, 3, null],
        py: [1, 2, null],
      }}
    >
      {props.children}
    </div>
  )
}

export default HeaderLayout
