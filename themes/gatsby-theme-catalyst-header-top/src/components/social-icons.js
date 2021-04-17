/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { SocialHeader } from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"
import { useHeaderConfig } from "../utils/use-header-config"
import ColorModeButton from "./color-mode-button"

const SocialWrapper = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useColorMode, useHeaderSocialLinks } = useHeaderConfig()
  const { theme } = useThemeUI()

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        mr: ["auto", null, 2, null, null],
        ml: ["auto", null, 2, null, null],
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
        button: {
          color: isNavOpen ? "header.iconsOpen" : "header.icons",
          ml: isNavOpen ? 3 : 2,
          ":hover": {
            color: "primary",
          },
        },
      }}
    >
      <IconContext.Provider value={{ size: theme.sizes.iconsHeader }}>
        {useHeaderSocialLinks && <SocialHeader />}
        {useColorMode && <ColorModeButton />}
      </IconContext.Provider>
    </div>
  )
}

export default SocialWrapper
