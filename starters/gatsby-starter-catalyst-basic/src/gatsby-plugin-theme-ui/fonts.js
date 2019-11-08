import merge from "deepmerge"
import { BaseThemeFonts } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeFonts, {
  // text:
  //   '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  // heading: "inherit",
  // monospace: "Menlo, monospace",
  // siteTitle: "inherit", // Font for main site title
  // navLinks: "inherit", // Font for the nav menu links
  // alt: "inherit",
})
