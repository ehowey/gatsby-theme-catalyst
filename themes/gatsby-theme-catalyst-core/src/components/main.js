/** @jsx jsx */
import { jsx } from "theme-ui"

const SiteMain = props => {
  return (
    <main
      sx={{
        flex: "1 1 auto",
        maxWidth: "maxContentWidth",
        width: "contentWidth",
        my: 5,
        mx: "auto",
      }}
    >
      {props.children}
    </main>
  )
}

export default SiteMain
