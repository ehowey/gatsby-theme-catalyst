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
          dmColors {
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
  const dmColor = sanityTheme.dmColors
  const themeFromSanity = {
    colors: {
      background:
        lmColor == null || lmColor.background == null
          ? baseColors.gray[1]
          : lmColor.background.hex,
      text:
        lmColor == null || lmColor.text == null
          ? baseColors.gray[8]
          : lmColor.text.hex,
      primary:
        lmColor == null || lmColor.primary == null
          ? baseColors.blue[7]
          : lmColor.primary.hex,
      secondary:
        lmColor == null || lmColor.secondary == null
          ? baseColors.orange[7]
          : lmColor.secondary.hex,
      accent:
        lmColor == null || lmColor.accent == null
          ? baseColors.orange[2]
          : lmColor.accent.hex,
      muted:
        lmColor == null || lmColor.muted == null
          ? baseColors.gray[2]
          : lmColor.muted.hex,
      header: {
        background:
          lmColor == null || lmColor.headerColors.background == null
            ? baseColors.gray[2]
            : lmColor.headerColors.background.hex,
        backgroundOpen:
          lmColor == null || lmColor.headerColors.backgroundOpen == null
            ? baseColors.blue[2]
            : lmColor.headerColors.backgroundOpen.hex,
        text:
          lmColor == null || lmColor.headerColors.text == null
            ? baseColors.gray[8]
            : lmColor.headerColors.text.hex,
        textOpen:
          lmColor == null || lmColor.headerColors.textOpen == null
            ? baseColors.gray[8]
            : lmColor.headerColors.textOpen.hex,
        icons:
          lmColor == null || lmColor.headerColors.icons == null
            ? baseColors.gray[6]
            : lmColor.headerColors.icons.hex,
        iconsOpen:
          lmColor == null || lmColor.headerColors.iconsOpen == null
            ? baseColors.gray[8]
            : lmColor.headerColors.iconsOpen.hex,
      },
      footer: {
        background:
          lmColor == null || lmColor.footerColors.background == null
            ? baseColors.gray[2]
            : lmColor.footerColors.background.hex,
        text:
          lmColor == null || lmColor.footerColors.text == null
            ? baseColors.gray[8]
            : lmColor.footerColors.text.hex,
        links:
          lmColor == null || lmColor.footerColors.link == null
            ? baseColors.gray[8]
            : lmColor.footerColors.links.hex,
        icons:
          lmColor == null || lmColor.footerColors.icons == null
            ? baseColors.gray[8]
            : lmColor.footerColors.icons.hex,
      },
      modes: {
        dark: {
          background:
            dmColor == null || dmColor.background == null
              ? baseColors.green[6]
              : dmColor.background.hex,
          text:
            dmColor == null || dmColor.text == null
              ? baseColors.gray[8]
              : dmColor.text.hex,
          primary:
            dmColor == null || dmColor.primary == null
              ? baseColors.blue[7]
              : dmColor.primary.hex,
          secondary:
            dmColor == null || dmColor.secondary == null
              ? baseColors.orange[7]
              : dmColor.secondary.hex,
          accent:
            dmColor == null || dmColor.accent == null
              ? baseColors.orange[2]
              : dmColor.accent.hex,
          muted:
            dmColor == null || dmColor.muted == null
              ? baseColors.gray[2]
              : dmColor.muted.hex,
          header: {
            background:
              dmColor == null ||
              dmColor.headerColors == null ||
              dmColor.headerColors.background == null
                ? baseColors.gray[2]
                : dmColor.headerColors.background.hex,
            backgroundOpen:
              dmColor == null ||
              dmColor.headerColors == null ||
              dmColor.headerColors.backgroundOpen == null
                ? baseColors.blue[2]
                : dmColor.headerColors.backgroundOpen.hex,
            text:
              dmColor == null ||
              dmColor.headerColors == null ||
              dmColor.headerColors.text == null
                ? baseColors.gray[8]
                : dmColor.headerColors.text.hex,
            textOpen:
              dmColor == null ||
              dmColor.headerColors == null ||
              dmColor.headerColors.textOpen == null
                ? baseColors.gray[8]
                : dmColor.headerColors.textOpen.hex,
            icons:
              dmColor == null ||
              dmColor.headerColors == null ||
              dmColor.headerColors.icons == null
                ? baseColors.gray[6]
                : dmColor.headerColors.icons.hex,
            iconsOpen:
              dmColor == null ||
              dmColor.headerColors == null ||
              dmColor.headerColors.iconsOpen == null
                ? baseColors.gray[8]
                : dmColor.headerColors.iconsOpen.hex,
          },
          footer: {
            background:
              dmColor == null ||
              dmColor.footerColors == null ||
              dmColor.footerColors.background == null
                ? baseColors.gray[2]
                : dmColor.footerColors.background.hex,
            text:
              dmColor == null ||
              dmColor.footerColors == null ||
              dmColor.footerColors.text == null
                ? baseColors.gray[8]
                : dmColor.footerColors.text.hex,
            links:
              dmColor == null ||
              dmColor.footerColors == null ||
              dmColor.footerColors.link == null
                ? baseColors.gray[8]
                : dmColor.footerColors.links.hex,
            icons:
              dmColor == null ||
              dmColor.footerColors == null ||
              dmColor.footerColors.icons == null
                ? baseColors.gray[8]
                : dmColor.footerColors.icons.hex,
          },
        },
      },
    },
  }
  const theme = merge(BaseTheme, themeFromSanity)
  return theme
}

export default SanityThemeUI
