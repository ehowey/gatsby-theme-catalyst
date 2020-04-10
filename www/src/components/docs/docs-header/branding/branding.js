/** @jsx jsx */
import { jsx } from "theme-ui"
import Logo from "./branding-logo"
import Title from "./branding-title"

const SiteBranding = () => {
  return (
    <div
      sx={{
        gridColumn: ["2 / 3", null, "1 / -1", null, null],
        gridRow: "1 / 2",
        display: "flex",
        flexDirection: ["row", null, "column", null, null],
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo />
      <Title />
    </div>
  )
}

export default SiteBranding
