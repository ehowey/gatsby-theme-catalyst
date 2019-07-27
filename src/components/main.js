/** @jsx jsx */
import { jsx } from "theme-ui"

const siteMain = props => {
  return (
    <main
      sx={{
        flex: "1 1 auto",
        mt: [
          theme => theme.sizes.mainMarginTop,
          theme => theme.sizes.mainMarginTopTablet,
          theme => theme.sizes.mainMarginTopLaptop,
        ],
        mr: "auto",
        mb: 0,
        ml: "auto",
        maxWidth: "maxContentWidth",
        width: "contentWidth",
      }}
    >
      {props.children}
    </main>
  )
}

export default siteMain
