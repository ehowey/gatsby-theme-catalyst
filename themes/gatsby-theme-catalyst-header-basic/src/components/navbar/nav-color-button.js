/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import { Button } from "@theme-ui/components"

const ColorModeButton = props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      onClick={e => {
        setColorMode(colorMode === "default" ? "dark" : "default")
      }}
    >
      {colorMode === "default" ? "Dark" : "Light"}
    </Button>
  )
}

export default ColorModeButton
