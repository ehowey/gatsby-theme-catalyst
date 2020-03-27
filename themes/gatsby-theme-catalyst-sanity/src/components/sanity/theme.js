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

  if (data.allSanityTheme.nodes[0] == null) {
    return BaseTheme
  }

  const sanityTheme = data.allSanityTheme.nodes[0]

  const themeFromSanity = {
    colors: {
      background:
        sanityTheme.colors == null || sanityTheme.colors.background == null
          ? baseColors.gray[1]
          : sanityTheme.colors.background.hex,
      text:
        sanityTheme.colors == null || sanityTheme.colors.text == null
          ? baseColors.gray[8]
          : sanityTheme.colors.text.hex,
      primary:
        sanityTheme.colors == null || sanityTheme.colors.primary == null
          ? baseColors.blue[7]
          : sanityTheme.colors.primary.hex,
      secondary:
        sanityTheme.colors == null || sanityTheme.colors.secondary == null
          ? baseColors.orange[7]
          : sanityTheme.colors.secondary.hex,
      accent:
        sanityTheme.colors == null || sanityTheme.colors.accent == null
          ? baseColors.orange[2]
          : sanityTheme.colors.accent.hex,
      muted:
        sanityTheme.colors == null || sanityTheme.colors.muted == null
          ? baseColors.gray[2]
          : sanityTheme.colors.muted.hex,
      header: {
        background:
          sanityTheme.colors == null ||
          sanityTheme.colors.headerColors == null ||
          sanityTheme.colors.headerColors.background == null
            ? baseColors.gray[2]
            : sanityTheme.colors.headerColors.background.hex,
        backgroundOpen:
          sanityTheme.colors == null ||
          sanityTheme.colors.headerColors == null ||
          sanityTheme.colors.headerColors.backgroundOpen == null
            ? baseColors.blue[2]
            : sanityTheme.colors.headerColors.backgroundOpen.hex,
        text:
          sanityTheme.colors == null ||
          sanityTheme.colors.headerColors == null ||
          sanityTheme.colors.headerColors.text == null
            ? baseColors.gray[8]
            : sanityTheme.colors.headerColors.text.hex,
        textOpen:
          sanityTheme.colors == null ||
          sanityTheme.colors.headerColors == null ||
          sanityTheme.colors.headerColors.textOpen == null
            ? baseColors.gray[8]
            : sanityTheme.colors.headerColors.textOpen.hex,
        icons:
          sanityTheme.colors == null ||
          sanityTheme.colors.headerColors == null ||
          sanityTheme.colors.headerColors.icons == null
            ? baseColors.gray[6]
            : sanityTheme.colors.headerColors.icons.hex,
        iconsOpen:
          sanityTheme.colors == null ||
          sanityTheme.colors.headerColors == null ||
          sanityTheme.colors.headerColors.iconsOpen == null
            ? baseColors.gray[8]
            : sanityTheme.colors.headerColors.iconsOpen.hex,
      },
      footer: {
        background:
          sanityTheme.colors == null ||
          sanityTheme.colors.footerColors == null ||
          sanityTheme.colors.footerColors.background == null
            ? baseColors.gray[2]
            : sanityTheme.colors.footerColors.background.hex,
        text:
          sanityTheme.colors == null ||
          sanityTheme.colors.footerColors == null ||
          sanityTheme.colors.footerColors.text == null
            ? baseColors.gray[8]
            : sanityTheme.colors.footerColors.text.hex,
        links:
          sanityTheme.colors == null ||
          sanityTheme.colors.footerColors == null ||
          sanityTheme.colors.footerColors.link == null
            ? baseColors.gray[8]
            : sanityTheme.colors.footerColors.links.hex,
        icons:
          sanityTheme.colors == null ||
          sanityTheme.colors.footerColors == null ||
          sanityTheme.colors.footerColors.icons == null
            ? baseColors.gray[8]
            : sanityTheme.colors.footerColors.icons.hex,
      },
    },
  }
  const theme = merge(BaseTheme, themeFromSanity)
  return theme
}

export default SanityThemeUI
