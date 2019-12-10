/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteMain = props => {
  return (
    <main
      sx={{
        flex: "1 1 auto",
        maxWidth: "maxContentWidth",
        width: "contentWidth",
        mt: [0, null, 3, null, null], // Modified spacing from core theme
        mb: 5,
        mx: "auto",
        variant: "variants.main",
      }}
    >
      {props.children}
    </main>
  )
}

export default SiteMain
