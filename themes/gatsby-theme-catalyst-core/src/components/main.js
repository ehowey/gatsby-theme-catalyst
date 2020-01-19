/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteMain = ({ children }) => {
  return (
    <main
      sx={{
        maxWidth: "maxContentWidth",
        width: "contentWidth",
        mt: 3,
        mb: 5,
        mx: "auto",
        gridArea: "main",
        variant: "variants.main",
      }}
    >
      {children}
    </main>
  )
}

export default SiteMain
