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
        display: "flex",
        alignItems: "center",
        mr: ["auto", null, 2, null, null],
        ml: "auto",
        mt: [2, null, 0, null, null],
        a: {
          color: isNavOpen ? "header.iconsOpen" : "header.icons",
          mr: isNavOpen ? 3 : 2,
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
