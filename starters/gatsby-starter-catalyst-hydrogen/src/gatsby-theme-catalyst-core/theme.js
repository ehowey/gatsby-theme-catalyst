// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"

export default {
  ...tailwind,
  breakpoints: ["480px", "768px", "1024px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    siteTitle: "inherit", // Font for main site title
    navLinks: "inherit", // Font for the nav menu links
    alt: "inherit", //An alternate font style if needed.
  },
  colors: {
    ...tailwind.colors,
    primary: baseColors.red[8],
    secondary: baseColors.red[5],
    accent: baseColors.gray[2],
    textWhite: baseColors.gray[1],
    header: {
      background: "transparent",
      backgroundOpen: baseColors.red[1],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsHover: baseColors.red[8],
      iconsOpen: baseColors.gray[6],
    },
    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthXS: "40px", // Logo width on extra small screens, up to 480px
    logoWidthS: "50px", // Logo width on small screens, 480px - 768px
    logoWidthM: "50px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "60px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "60px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "40px", // Logo height on extra small screens, up to 480px
    logoHeightS: "50px", // Logo height on small screens, 480px - 768px
    logoHeightM: "50px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "60px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "60px", // Logo height on extra large screens, above 1440px
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  styles: {
    ...tailwind.styles,
    root: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 4,
      fontSize: 6,
      mt: 4,
      "::after": {
        display: "block",
        content: '""',
        width: ["25%", "20%", "15%", null, "10%"],
        pt: 2,
        borderBottomStyle: "solid",
        borderBottomWidth: "4px",
        borderBottomColor: "primary",
      },
    },
    blockquote: {
      bg: "muted",
      p: 3,
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      color: "text",
      bg: "muted",
      fontSize: 1,
      p: 1,
    },
    pre: {
      bg: "muted",
      color: "text",
      fontSize: 1,
      p: 3,
    },
    table: {
      width: "100%",
      my: 3,
      borderCollapse: "collapse",
    },
    th: {
      verticalAlign: "bottom",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "muted",
      backgroundColor: "muted",
      padding: 2,
      textAlign: "inherit",
    },
    td: {
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "muted",
      verticalAlign: "top",
      padding: 2,
    },
  },
  variants: {
    siteTitle: {
      fontSize: [4, null, null, 5, null],
      "::after": {
        display: "none",
      },
    },
  },
}
