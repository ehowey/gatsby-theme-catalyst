/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const HeaderLayout = ({ children }) => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen] = useContext(NavContext)

  return (
    <div
      sx={{
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
        alignSelf: "start",
        display: "grid",
        gridTemplateColumns: isMobile ? "60px auto 60px" : "1fr",
        gridTemplateRows: isMobile ? "auto" : "auto auto",
        p: isMobile ? 1 : 3,
        pb: isNavOpen ? 4 : 0,
      }}
    >
      {children}
    </div>
  )
}

export default HeaderLayout
