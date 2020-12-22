/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import { SocialHeader } from "gatsby-theme-catalyst-core"
import { ColorModeButton } from "gatsby-theme-catalyst-core"
import { IconContext } from "react-icons"

const SocialWrapper = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useColorMode } = useCatalystConfig()
  const { theme } = useThemeUI()

  return (
    <div
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "center",
        width: "100%",
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
        variant: "variants.navIcons",
      }}
    >
      <IconContext.Provider value={{ size: theme.sizes.iconsHeader }}>
        <SocialHeader />
        {useColorMode && <ColorModeButton />}
      </IconContext.Provider>
    </div>
  )
}

export default SocialWrapper
