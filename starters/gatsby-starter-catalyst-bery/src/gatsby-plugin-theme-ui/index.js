import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  // Modifications to the base theme go here.
  variants: {
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
    },
  },
})
