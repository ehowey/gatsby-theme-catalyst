import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  sizes: {
    logoWidthXS: "40px", // Logo width on extra small screens, up to 480px
    logoWidthS: "40px", // Logo width on small screens, 480px - 768px
    logoWidthM: "120px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "130px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "140px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "40px", // Logo height on extra small screens, up to 480px
    logoHeightS: "40px", // Logo height on small screens, 480px - 768px
    logoHeightM: "120px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "130px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "140px", // Logo height on extra large screens, above 1440px
  },
  variants: {
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
    },
  },
})
