/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavLiDropdown = ({ children }) => {
  const [isMobile] = useContext(MobileContext)
  const [isNavOpen] = useContext(NavContext)

  return (
    <li
      sx={
        {
          // display: "block",
          // transitionDuration: "0.5s",
          // clear: "both",
          // width: "100%",
          // ":hover": {
          //   cursor: "pointer",
          // },
        }
      }
    >
      {children}
    </li>
  )
}

export default NavLiDropdown
