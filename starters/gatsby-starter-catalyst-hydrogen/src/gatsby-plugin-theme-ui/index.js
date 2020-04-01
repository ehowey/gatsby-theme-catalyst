import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { baseColors } from "@theme-ui/preset-tailwind"

export default merge(BaseTheme, {
  colors: {
    primary: baseColors.red[8],
    secondary: baseColors.red[5],
    accent: baseColors.gray[2],
    header: {
      background: "transparent",
      backgroundOpen: baseColors.red[1],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsHover: baseColors.red[8],
      iconsOpen: baseColors.gray[6],
    },
    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
  },
  styles: {
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 4,
      fontSize: 6,
      mt: 4,
      "::after": {
        display: "block",
        content: '""',
        width: ["25%", "20%", "15%", null, "10%"],
        pt: 2,
        borderBottomStyle: "solid",
        borderBottomWidth: "4px",
        borderBottomColor: "primary",
      },
    },
  },
  variants: {
    siteTitle: {
      fontSize: [4, null, null, 5, null],
      "::after": {
        display: "none",
      },
    },
  },
})
