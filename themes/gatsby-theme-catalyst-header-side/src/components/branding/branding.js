/** @jsx jsx */
import { jsx } from "theme-ui"
import Logo from "./branding-logo"
import Title from "./branding-title"

const SiteBranding = () => {
  return (
    <div
      sx={{
        gridColumn: "1 / -1",
        gridRow: "1 / 2",
        display: "flex",
        flexDirection: ["row", null, "column", null, null],
        alignItems: "center",
        justifyContent: ["center", null, "start", null, null],
        variant: "variants.branding",
      }}
    >
      <Logo />
      <Title />
    </div>
  )
}

export default SiteBranding
