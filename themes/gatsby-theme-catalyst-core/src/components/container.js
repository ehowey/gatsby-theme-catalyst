/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteContainer = ({ children }) => {
  return (
    <div
      sx={{
        width: "100%",
        ml: "auto",
        mr: "auto",
        variant: "variants.container",
      }}
    >
      {children}
    </div>
  )
}

export default SiteContainer
