import merge from "deepmerge"
import { BaseThemeColors } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeColors, {
  primary: "#3e5a70",
  secondary: "#cba654",
  accent: "#eed4cc",
  muted: "#FFF2FC",
  // grey: "#c0c0c0",
  // text: "#333333",
  // textWhite: "#ffffff",
  // background: "#ffffff",
  header: {
    background: "transparent",
    backgroundOpen: "#3e5a70",
    text: "#333333",
    textOpen: "#ffffff",
    icons: "#333333",
    iconsHover: "#48487A",
    iconsOpen: "#ffffff",
  },
  footer: {
    background: "#eed4cc",
    text: "#333",
    links: "#333",
    icons: "#333",
  },
})
