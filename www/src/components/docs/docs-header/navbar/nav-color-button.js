/** @jsx jsx */
import { jsx, useColorMode, useThemeUI, IconButton } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { FiSun, FiMoon } from "react-icons/fi"
import { IconContext } from "react-icons"

const ColorModeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [isNavOpen] = useContext(NavContext)
  const { theme } = useThemeUI()

  return (
    <IconButton
      sx={{
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        color: isNavOpen ? "header.iconsOpen" : "header.icons",
        width: "auto",
        height: "auto",
        p: 0,
        m: 0,
        ml: 2,
        ":hover": {
          color: "primary",
        },
      }}
      aria-label="Toggle dark mode"
      onClick={(e) => {
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
