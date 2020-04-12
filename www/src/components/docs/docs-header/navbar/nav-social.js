/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { SocialHeader } from "gatsby-theme-catalyst-core"
import NavColorButton from "./nav-color-button"

const SocialWrapper = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useColorMode } = useCatalystConfig()

  return (
    <div
      sx={{
        mb: 2,
        display: "flex",
        a: {
          color: isNavOpen ? "header.iconsOpen" : "header.icons",
          mr: 2,
          textDecoration: "none",
          display: "grid",
          placeItems: "center",
        },
        "a:last-of-type": {
          mr: 0,
        },
        "a:hover": {
          color: "primary",
        },
      }}
    >
      <SocialHeader />
      {useColorMode && <NavColorButton />}
    </div>
  )
}

export default SocialWrapper
