/** @jsx jsx */
import { jsx } from "theme-ui"
import Logo from "./branding-logo"
import Title from "./branding-title"

const SiteBranding = () => {
  return (
    <div
      sx={{
        display: "grid",
        placeItems: "center",
        my: [2, null, 4, null, null],
        gridArea: "branding",
      }}
    >
      <Logo />
      <Title />
    </div>
  )
}

export default SiteBranding
