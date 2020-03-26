import { useStaticQuery, graphql } from "gatsby"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { merge } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"

const SanityThemeUI = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityTheme(
          sort: { fields: _updatedAt, order: DESC }
          filter: { useSanityThemeUI: { eq: true } }
        ) {
          nodes {
            colors {
              accent {
                hex
              }
              background {
                hex
              }
              primary {
                hex
              }
              secondary {
                hex
              }
              text {
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
      }
    `
  )

  const sanityTheme = data.allSanityTheme.nodes[0]

  const themeFromSanity = {
    colors: {
      background:
        sanityTheme.color == null || sanityTheme.color.background == null
          ? baseColors.gray[1]
          : sanityTheme.color.background.hex,
      text:
        sanityTheme.color == null || sanityTheme.color.text == null
          ? baseColors.gray[8]
          : sanityTheme.color.text.hex,
      primary:
        sanityTheme.color == null || sanityTheme.color.primary == null
          ? baseColors.blue[7]
          : sanityTheme.color.primary.hex,
      secondary:
        sanityTheme.color == null || sanityTheme.color.secondary == null
          ? baseColors.orange[7]
          : sanityTheme.color.secondary.hex,
      accent:
        sanityTheme.color == null || sanityTheme.color.accent == null
          ? baseColors.orange[2]
          : sanityTheme.color.accent.hex,
      muted:
        sanityTheme.color == null || sanityTheme.color.muted == null
          ? baseColors.gray[2]
          : sanityTheme.color.muted.hex,
      header: {
        background:
          sanityTheme.color == null ||
          sanityTheme.color.headerColors.background == null
            ? baseColors.gray[2]
            : sanityTheme.color.headerColors.background.hex,
        backgroundOpen:
          sanityTheme.color == null ||
          sanityTheme.color.headerColors.backgroundOpen == null
            ? baseColors.blue[2]
            : sanityTheme.color.headerColors.backgroundOpen.hex,
        text:
          sanityTheme.color == null ||
          sanityTheme.color.headerColors.text == null
            ? baseColors.gray[8]
            : sanityTheme.color.headerColors.text.hex,
        textOpen:
          sanityTheme.color == null ||
          sanityTheme.color.headerColors.textOpen == null
            ? baseColors.gray[8]
            : sanityTheme.color.headerColors.textOpen.hex,
        icons:
          sanityTheme.color == null ||
          sanityTheme.color.headerColors.icons == null
            ? baseColors.gray[6]
            : sanityTheme.color.headerColors.icons.hex,
        iconsOpen:
          sanityTheme.color == null ||
          sanityTheme.color.headerColors.iconsOpen == null
            ? baseColors.gray[8]
            : sanityTheme.color.headerColors.iconsOpen.hex,
      },
      footer: {
        background:
          sanityTheme.color == null ||
          sanityTheme.color.footerColors.background == null
            ? baseColors.gray[2]
            : sanityTheme.color.footerColors.background.hex,
        text:
          sanityTheme.color == null ||
          sanityTheme.color.footerColors.text == null
            ? baseColors.gray[8]
            : sanityTheme.color.footerColors.text.hex,
        links:
          sanityTheme.color == null ||
          sanityTheme.color.footerColors.link == null
            ? baseColors.gray[8]
            : sanityTheme.color.footerColors.links.hex,
        icons:
          sanityTheme.color == null ||
          sanityTheme.color.footerColors.icons == null
            ? baseColors.gray[8]
            : sanityTheme.color.footerColors.icons.hex,
      },
    },
  }
  const theme = merge(BaseTheme, themeFromSanity)
  return theme
}

export default SanityThemeUI
