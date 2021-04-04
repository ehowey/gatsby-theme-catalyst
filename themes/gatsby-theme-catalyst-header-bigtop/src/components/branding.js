/** @jsx jsx */
import { jsx } from "theme-ui"

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
      Branding
    </div>
  )
}

export default SiteBranding
