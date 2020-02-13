/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"

const NavUlDropdown = ({ children }) => {
  const [isMobile] = useContext(MobileContext)

  return (
    <ul
      sx={{
        visibility: "hidden",
        opacity: "0",
        // position: "absolute",
        // transition: "all 0.5s ease",
        // marginTop: "1rem",
        // left: "0",
        display: "none",

        ":hover": {
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

export default NavUlDropdown
