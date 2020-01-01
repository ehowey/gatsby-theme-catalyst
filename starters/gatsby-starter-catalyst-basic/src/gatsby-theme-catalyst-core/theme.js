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
    textWhite: baseColors.gray[1],
    header: {
      background: baseColors.gray[4],
      backgroundOpen: baseColors.gray[8],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[1],
      icons: baseColors.gray[8],
      iconsHover: baseColors.blue[7],
      iconsOpen: baseColors.gray[1],
    },
    footer: {
      background: baseColors.gray[8],
      text: baseColors.gray[1],
      links: baseColors.gray[1],
      icons: baseColors.gray[1],
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
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
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
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
      fontSize: 1,
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
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
}
