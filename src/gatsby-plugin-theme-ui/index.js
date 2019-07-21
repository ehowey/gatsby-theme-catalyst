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
      text: "#ffffff"
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
    ContentWidth: "90vw" // Sets the container width on smaller screens, results in a 5vw margin on the left and right
  },
  breakpoints: [
    '48em', '64em'
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
    h1: {
      color: "text",
      fontSize: 5,
      lineHeight: "heading",
      fontweight: "heading"
    },
  },
}