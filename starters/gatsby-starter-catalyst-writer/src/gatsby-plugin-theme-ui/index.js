// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
import merge from "deepmerge"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { baseColors } from "@theme-ui/preset-tailwind"

export default merge(BaseTheme, {
  colors: {
    primary: baseColors.pink[9],
    secondary: baseColors.pink[6],
    accent: baseColors.gray[2],
    header: {
      background: "transparent",
      backgroundOpen: baseColors.pink[9],
      iconsHover: baseColors.pink[6],
      iconsOpen: "#ffffff",
    },
    footer: {
      background: "#eeeeee",
      text: "#333",
      links: "#333",
      icons: "#333",
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
      display: "flex",
      alignItems: "center",
      "::after": {
        flex: "1",
        content: '""',
        width: "100%",
        borderColor: "secondary",
        borderTopWidth: "16px",
        borderTopStyle: "dotted",
        ml: 2,
        mt: "4px",
        opacity: "0.3",
      },
    },
  },
})
