import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  // Modifications to the base theme go here. This is an example changing colors and using variants to change your navigation links. Uncomment the code below to see what happens.
  // colors: {
  //   background: "pink",
  //   modes: {
  //     dark: {
  //       background: "purple",
  //     },
  //   },
  // },
  variants: {
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
    },
  },
})
