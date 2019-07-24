/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    primary: "#3273dc",
    secondary: "#0c66a1",
    muted: "#f5f5f5",
    text: "#333333",
    background: "#ffffff",

    header: {
      background: "#cccccc",
      backgroundOpen: '#333333',
      text: '#333333',
      textOpen: '#ffffff'
    },

    footer: {
      background: "#333333",
      text: "#ffffff",
      links: "#ffffff",
      icons: "#ffffff"
    }
  },
  fonts: {
    text: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.5rem",
    "3rem" 
  ],
  fontWeights: {
    text: "400",
    heading: "700",
    bold: "700"
  },
  lineHeights: {
    text: "1.5",
    heading: "1.125",
  },
  spaces: [
    "0rem",
    "0.5rem",
    "1rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem"
  ],
  sizes: {
    maxContentWidth: 720, // Sets the container size on larger screens, e.g. tablets and laptops
    contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
    headerHeight: "60px", // Sets the height of the header on screens before the first breakpoint, 767px and below by default
    headerHeightTablet: "80px", // Sets the height of the header after the first breakpoint, 768px to 1023px by default
    headerHeightLaptop: "80px", // Sets the height of the header after the second breakpoint, 1024px and up by default
    logoWidth: "50px", // Logo width on small screens, height is auto
    logoWidthTablet: "60px", // Logo width on medium screens, height is auto
    logoWidthLaptop: "60px", // Logo width on large screens, height is auto
    mainMarginTop: "0", // Used for a fixed header in the onepage theme
    mainMarginTopTablet: "0", // Used for a fixed header in the onepage theme
    mainMarginTopLaptop: "0", // Used for a fixed header in the onepage theme
    icons: "2rem" // Sets the icons size across the website, see npm package "react-icons" for more information
  },
  breakpoints: [
    '768px', '1024px' // Must be in pixels for now, value is used in calculations, in future will convert rems/ems
  ],
  catalystOptions: {
    headerPosition: "static",
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "text",
      fontWeight: "text",
      lineHeight: "text",
      fontSize: 3
    },
  },
}