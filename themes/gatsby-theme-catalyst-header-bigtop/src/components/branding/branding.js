/** @jsx jsx */
import { jsx } from "theme-ui"
import Logo from "./branding-logo"
import Title from "./branding-title"

const SiteBranding = () => {
  return (
    <div
      sx={{
        display: ["flex", null, "grid", null, null],
        placeItems: "center",
        justifyContent: "center",
        gridArea: "branding",
        variant: "variants.branding",
      }}
    >
      <Logo />
      <Title />
    </div>
  )
}

export default SiteBranding
