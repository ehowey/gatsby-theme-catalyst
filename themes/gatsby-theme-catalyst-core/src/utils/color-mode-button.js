/** @jsx jsx */
import { jsx, useColorMode, IconButton } from "theme-ui"
import { FiSun, FiMoon } from "react-icons/fi"

const ColorModeButton = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <IconButton
      sx={{
        cursor: "pointer",
        width: "auto",
        height: "auto",
        p: 0,
        m: 0,
        variant: "variants.colorModeButton",
      }}
      aria-label="Toggle dark mode"
      onClick={(e) => {
        setColorMode(colorMode === "light" ? "dark" : "light")
      }}
    >
      {colorMode === "light" ? <FiMoon /> : <FiSun />}
    </IconButton>
  )
}

export default ColorModeButton
