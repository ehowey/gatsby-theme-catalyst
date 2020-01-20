/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"

const HeaderLayout = ({ children }) => {
  const [isMobile] = useContext(MobileContext)

  return (
    <div
      sx={{
        gridRow: "1 / -1",
        gridColumn: "1 / -1",
        alignSelf: "start",
        display: "grid",
        gridTemplateColumns: isMobile ? "60px auto 60px" : "1fr",
        gridTemplateRows: isMobile ? "auto" : "auto auto",
        p: 3,
      }}
    >
      {children}
    </div>
  )
}

export default HeaderLayout
