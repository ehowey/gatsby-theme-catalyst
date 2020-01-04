/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { SocialHeader } from "gatsby-theme-catalyst-core"
import NavColorButton from "./nav-color-button"

const SocialWrapper = () => {
  const [isNavOpen] = useContext(NavContext)
  const [isMobile] = useContext(MobileContext)

  return (
    <div
      sx={{
        display: "flex",
        mr: isMobile ? "auto" : 2,
        ml: "auto",
        mt: isMobile ? 2 : 0,

        a: {
          color: isNavOpen ? "header.iconsOpen" : "header.icons",
          mr: 2,
          textDecoration: "none",
        },
        "a:last-of-type": {
          mr: 0,
        },
        "a:hover": {
          color: "header.iconsHover",
        },
      }}
    >
      <SocialHeader />
      <NavColorButton />
    </div>
  )
}

export default SocialWrapper
