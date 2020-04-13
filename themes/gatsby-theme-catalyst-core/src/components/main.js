/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteMain = ({ children }) => {
  return (
    <main
      sx={{
        my: 3,
        gridArea: "main",
        variant: "variants.main",
      }}
    >
      {children}
    </main>
  )
}

export default SiteMain
