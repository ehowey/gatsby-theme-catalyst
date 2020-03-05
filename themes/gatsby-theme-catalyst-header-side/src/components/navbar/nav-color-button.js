/** @jsx jsx */
import { jsx, useColorMode, useThemeUI, IconButton } from "theme-ui"
import { useContext } from "react"
import { MobileContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"
import { FiSun, FiMoon } from "react-icons/fi"
import { IconContext } from "react-icons"

const ColorModeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [isNavOpen] = useContext(NavContext)
  const [isMobile] = useContext(MobileContext)
  const { theme } = useThemeUI()
  console.log(colorMode)

  return (
    <IconButton
      sx={{
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        color: isMobile && isNavOpen ? "header.iconsOpen" : "header.icons",
        width: "auto",
        height: "auto",
        p: 0,
        m: 0,
        ml: 2,
        ":hover": {
          color: "header.iconsHover",
        },
      }}
      aria-label="Toggle dark mode"
      onClick={e => {
        setColorMode(colorMode === "light" ? "dark" : "light")
      }}
    >
      <IconContext.Provider value={{ size: theme.sizes.iconsHeader }}>
        {colorMode === "light" ? <FiMoon /> : <FiSun />}
      </IconContext.Provider>
    </IconButton>
  )
}

export default ColorModeButton
