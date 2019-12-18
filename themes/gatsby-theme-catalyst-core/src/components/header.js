// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteHeader = () => {
  return (
    <header
      sx={{
        bg: "#ddd",
        p: 3,
        variant: "variants.header",
      }}
      id="header"
    >
      <p>Header area for latent shadowing in sibling themes</p>
    </header>
  )
}

export default SiteHeader
