/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteMain = ({ children }) => {
  return (
    <main
      sx={{
        flex: "1 1 auto",
        maxWidth: "maxContentWidth",
        width: "contentWidth",
        mt: 3,
        mb: 5,
        mx: "auto",
        variant: "variants.main",
      }}
    >
      {children}
    </main>
  )
}

export default SiteMain
