import { useStaticQuery, graphql } from "gatsby"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { merge } from "theme-ui"

const SanityThemeUI = () => {
  const { sanityTheme } = useStaticQuery(
    graphql`
      query {
        sanityTheme {
          bgcolor
        }
      }
    `
  )
  const theme = merge(BaseTheme, {
    colors: {
      background: sanityTheme.bgcolor,
    },
  })
  console.log(theme)
  return theme
}

export default SanityThemeUI

// export default {
//   colors: { background: "pink" },
// }
