/** @jsx jsx */
import { jsx } from "theme-ui"

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
      Branding
    </div>
  )
}

export default SiteBranding
