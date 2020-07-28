// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteHeader = () => {
  return (
    <header
      sx={{
        bg: "#ddd",
        gridArea: "header",
        variant: "variants.header",
        display: "grid",
        placeItems: "center",
        width: "100%",
      }}
      id="header"
    >
      <div
        sx={{
          maxWidth: "maxContentWidth",
        }}
      >
        <p>Header area for Bery</p>
      </div>
    </header>
  )
}

export default SiteHeader
