/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteMain = ({ children }) => {
  return (
    <main
      sx={{
        gridArea: "main",
        variant: "variants.main",
      }}
    >
      {children}
    </main>
  )
}

export default SiteMain
