/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { IconButton } from "@theme-ui/components"
import { FiSun, FiMoon } from "react-icons/fi"

const ColorModeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [isNavOpen] = useContext(NavContext)

  return (
    <IconButton
      sx={{
        cursor: "pointer",
        color: isNavOpen ? "header.iconsOpen" : "header.icons",
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
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      {colorMode === "default" ? <FiSun /> : <FiMoon />}
    </IconButton>
  )
}

export default ColorModeButton
