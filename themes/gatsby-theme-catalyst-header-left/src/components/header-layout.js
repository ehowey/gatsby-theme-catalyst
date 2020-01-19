/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const HeaderLayout = ({ children }) => {
  const [isNavOpen] = useContext(NavContext)
  // const { theme } = useThemeUI()

  return (
    <div
      sx={{
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
        alignSelf: "start",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto auto",
        p: 3,
        zIndex: "999", //Ensure the nav is always on top.
      }}
    >
      {children}
    </div>
  )
}

export default HeaderLayout
