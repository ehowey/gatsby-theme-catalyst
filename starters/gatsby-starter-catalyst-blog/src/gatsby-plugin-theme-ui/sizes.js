import merge from "deepmerge"
import { BaseThemeSizes } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeSizes, {
  // maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
  // contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
  // headerHeight: "60px", // Sets the height of the header on screens before the first breakpoint, 767px and below by default
  // headerHeightTablet: "80px", // Sets the height of the header after the first breakpoint, 768px to 1023px by default
  // headerHeightLaptop: "80px", // Sets the height of the header after the second breakpoint, 1024px and up by default
  // logoWidth: "50px", // Logo width on small screens, height is auto
  // logoWidthTablet: "60px", // Logo width on medium screens, height is auto
  // logoWidthLaptop: "60px", // Logo width on large screens, height is auto
  // mainMarginTop: "2rem", // Used for a dynamic spacing between nav menu and page content, also for fixed header in onepage theme
  // mainMarginTopTablet: "2rem", // Used for a dynamic spacing between nav menu and page content, also for fixed header in onepage theme
  // mainMarginTopLaptop: "2rem", // Used for a dynamic spacing between nav menu and page content, also for fixed header in onepage theme
  // iconsFooter: "2rem", // Sets the icons size for the footer
  // iconsHeader: "1.25rem", // Sets the icons size for the header
})
