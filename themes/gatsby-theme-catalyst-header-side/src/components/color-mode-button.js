/** @jsx jsx */
import { jsx, useColorMode, IconButton } from "theme-ui"
import { FiSun, FiMoon } from "react-icons/fi"

const ColorModeButton = () => {
  const [colorMode, setColorMode] = useColorMode()
  const inactiveTheme = colorMode === "light" ? "dark" : "light"

  return (
    <IconButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      sx={{
        cursor: "pointer",
        width: "auto",
        height: "auto",
        p: 0,
        m: 0,
        variant: "variants.colorModeButton",
      }}
      onClick={(e) => {
        const next = colorMode === "dark" ? "light" : "dark"
        setColorMode(next)
      }}
    >
      {colorMode === "dark" ? (
        <FiSun aria-hidden={true} />
      ) : (
        <FiMoon aria-hidden={true} />
      )}
    </IconButton>
  )
}

export default ColorModeButton
