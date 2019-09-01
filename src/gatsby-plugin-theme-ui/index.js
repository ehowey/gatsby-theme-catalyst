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
    grey: "#c0c0c0",
    text: "#333333",
    textWhite: "#ffffff",
    background: "#ffffff",

    header: {
      background: "#cccccc",
      backgroundOpen: "#333333",
      text: "#333333",
      textOpen: "#ffffff",
      icons: "#333333",
      iconsHover: "#3273dc",
      iconsOpen: "#ffffff",
    },

    footer: {
      background: "#333333",
      text: "#ffffff",
      links: "#ffffff",
      icons: "#ffffff",
    },
  },
  fonts: {
    text:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading: "inherit",
    monospace: "Menlo, monospace",
    siteTitle: "inherit", // Font for main site title
    navLinks: "inherit", // Font for the nav menu links
    alt: "inherit",
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
    "3rem",
  ],
  fontWeights: {
    text: "400",
    heading: "700",
    bold: "700",
  },
  lineHeights: {
    text: "1.5",
    heading: "1.125",
  },
  spaces: ["0rem", "0.5rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"],
  sizes: {
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
    headerHeight: "60px", // Sets the height of the header on screens before the first breakpoint, 767px and below by default
    headerHeightTablet: "80px", // Sets the height of the header after the first breakpoint, 768px to 1023px by default
    headerHeightLaptop: "80px", // Sets the height of the header after the second breakpoint, 1024px and up by default
    logoWidth: "50px", // Logo width on small screens, height is auto
    logoWidthTablet: "60px", // Logo width on medium screens, height is auto
    logoWidthLaptop: "60px", // Logo width on large screens, height is auto
    mainMarginTop: "2rem", // Used for a dynamic spacing between nav menu and page content, also for fixed header in onepage theme
    mainMarginTopTablet: "2rem", // Used for a dynamic spacing between nav menu and page content, also for fixed header in onepage theme
    mainMarginTopLaptop: "2rem", // Used for a dynamic spacing between nav menu and page content, also for fixed header in onepage theme
    iconsFooter: "2rem", // Sets the icons size for the footer
    iconsHeader: "1.25rem", // Sets the icons size for the header
  },
  breakpoints: ["768px", "1024px"], //Must use pixel units in anchornav
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
    },
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "text",
      fontWeight: "text",
      lineHeight: "text",
      fontSize: 3,
    },
    a: {
      color: "primary", //Sets the default link color
      textDecoration: "none",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 2,
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 5,
      mt: 2,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 4,
      mt: 3,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 3,
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 2,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 2,
      fontSize: 1,
    },
    hr: {
      bg: "grey",
      border: 0,
      height: "2px",
      m: 3,
    },
    blockquote: {
      bg: "muted",
      p: 3,
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      fontFamily: "monospace",
      backgroundColor: "muted",
      p: 1,
      fontSize: 2,
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 2,
      overflowX: "auto",
      bg: "muted",
      p: 3,
      border: "1px solid",
      borderColor: "grey",
      borderRadius: "0.25rem",
      code: {
        color: "inherit",
        p: 0,
      },
    },
  },
  variants: {
    buttons: {
      primary: {
        backgroundColor: "primary",
        color: "textWhite",
      },
      secondary: {
        backgroundColor: "secondary",
        color: "textWhite",
      },
      large: {
        backgroundColor: "primary",
        color: "textWhite",
        textTransform: "uppercase",
        fontSize: 4,
        px: 4,
        py: 3,
      },
    },
  },
}
