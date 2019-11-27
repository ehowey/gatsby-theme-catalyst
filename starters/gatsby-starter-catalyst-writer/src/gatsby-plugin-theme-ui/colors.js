import merge from "deepmerge"
import { BaseThemeColors } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeColors, {
  primary: "#85144b",
  secondary: "#F012BE",
  accent: "#eeeeee",
  muted: "#FFF2FC",
  // grey: "#c0c0c0",
  // text: "#333333",
  // textWhite: "#ffffff",
  // background: "#ffffff",
  header: {
    background: "transparent",
    backgroundOpen: "#85144b",
    text: "#333333",
    textOpen: "#ffffff",
    icons: "#333333",
    iconsHover: "#F012BE",
    iconsOpen: "#ffffff",
  },
  footer: {
    background: "#eeeeee",
    text: "#333",
    links: "#333",
    icons: "#333",
  },
})
