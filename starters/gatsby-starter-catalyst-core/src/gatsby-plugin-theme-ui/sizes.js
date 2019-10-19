import merge from "deepmerge"
import { BaseThemeSizes } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeSizes, {
  // maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
  // contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
  // headerHeight: "auto", // Provides fallback setting to control header height
  // logoWidthMobile: "40px", // Logo width on small screens
  // logoWidthTablet: "50px", // Logo width on medium screens
  // logoWidthLaptop: "60px", // Logo width on large screens
  // logoHeightMobile: "40px", // Logo height on small screens
  // logoHeightTablet: "50px", // Logo width on medium screens
  // logoHeightLaptop: "60px", // Logo width on large screens
  // iconsFooter: "2rem", // Sets the icons size for the footer
  // iconsHeader: "1.25rem", // Sets the icons size for the header
})
