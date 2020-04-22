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
        const next = colorMode === "dark" ? "light" : "dark"
        setColorMode(next)
      }}
    >
      {colorMode === "dark" ? <FiSun /> : <FiMoon />}
    </IconButton>
  )
}

export default ColorModeButton
