import { useStaticQuery, graphql } from "gatsby"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { merge } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"

const SanityThemeUI = () => {
  const { sanityTheme } = useStaticQuery(
    graphql`
      query {
        sanityTheme {
          lmColors {
            background {
              hex
            }
            text {
              hex
            }
            primary {
              hex
            }
            secondary {
              hex
            }
            accent {
              hex
            }
            muted {
              hex
            }
            headerColors {
              background {
                hex
              }
              backgroundOpen {
                hex
              }
              icons {
                hex
              }
              iconsOpen {
                hex
              }
              text {
                hex
              }
              textOpen {
                hex
              }
            }
            footerColors {
              background {
                hex
              }
              icons {
                hex
              }
              links {
                hex
              }
              text {
                hex
              }
            }
          }
        }
      }
    `
  )
  const lmColor = sanityTheme.lmColors
  const themeFromSanity = {
    colors: {
      background:
        lmColor.background == null
          ? baseColors.gray[1]
          : lmColor.background.hex,
      text: lmColor.text.hex || baseColors.gray[8],
      primary: lmColor.primary.hex || baseColors.blue[7],
      secondary: lmColor.secondary.hex || baseColors.orange[7],
      accent: lmColor.accent.hex || baseColors.orange[2],
      muted: lmColor.muted.hex || baseColors.gray[2],
      header: {
        background: lmColor.headerColors.background.hex,
        backgroundOpen: lmColor.headerColors.backgroundOpen.hex,
        text: lmColor.headerColors.text.hex,
        textOpen: lmColor.headerColors.textOpen.hex,
        icons: lmColor.headerColors.icons.hex,
        iconsOpen: lmColor.headerColors.iconsOpen.hex,
      },
      footer: {
        background: lmColor.footerColors.background.hex,
        text: lmColor.footerColors.text.hex,
        links: lmColor.footerColors.links.hex,
        icons: lmColor.footerColors.icons.hex,
      },
    },
  }
  const theme = merge(BaseTheme, themeFromSanity)
  return theme
}

export default SanityThemeUI

// export default {
//   colors: { background: "pink" },
// }
