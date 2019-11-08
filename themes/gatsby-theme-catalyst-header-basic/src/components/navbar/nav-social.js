/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { MobileContext } from "gatsby-theme-catalyst-core"
import NavSocialIcons from "./nav-social-icons"

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
      <NavSocialIcons />
    </div>
  )
}

export default SocialWrapper
