import { useStaticQuery, graphql } from "gatsby"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { merge } from "theme-ui"

const SanityThemeUI = () => {
  const { sanityTheme } = useStaticQuery(
    graphql`
      query {
        sanityTheme {
          lmColors {
            lmBackground {
              hex
            }
            lmText {
              hex
            }
            lmPrimary {
              hex
            }
            lmSecondary {
              hex
            }
            lmAccent {
              hex
            }
            lmMuted {
              hex
            }
          }
        }
      }
    `
  )
  const lmColor = sanityTheme.lmColors
  const theme = merge(BaseTheme, {
    colors: {
      background: lmColor.lmBackground.hex,
      text: lmColor.lmText.hex,
      primary: lmColor.lmPrimary.hex,
      secondary: lmColor.lmSecondary.hex,
      accent: lmColor.lmAccent.hex,
      muted: lmColor.lmMuted.hex,
    },
  })
  return theme
}

export default SanityThemeUI

// export default {
//   colors: { background: "pink" },
// }
