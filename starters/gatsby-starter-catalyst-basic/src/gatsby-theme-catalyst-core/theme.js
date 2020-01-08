// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import github from "@theme-ui/prism/presets/github"

export default {
  useColorSchemeMediaQuery: true,
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
    text: "#00214d",
    background: "#fffffe",
    primary: "#ff5470",
    secondary: "#00ebc7",
    accent: "#fde24f",
    muted: baseColors.gray[2],

    header: {
      background: "#fffffe",
      backgroundOpen: "#fde24f",
      text: "#00214d",
      textOpen: "#00214d",
      icons: "#00214d",
      iconsHover: "#ff5470",
      iconsOpen: "#00214d",
    },
    footer: {
      background: "#fde24f",
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    modes: {
      dark: {
        text: baseColors.gray[1],
        background: baseColors.gray[9],
        accent: baseColors.gray[7],
        muted: baseColors.gray[8],
        header: {
          text: baseColors.gray[1],
          textOpen: "#00214d",
          background: "#232946",
          backgroundOpen: baseColors.gray[8],
          icons: baseColors.gray[1],
          iconsHover: "#ff5470",
          iconsOpen: "#00214d",
        },
        footer: {
          background: "#232946",
          text: "#fde24f",
          links: "#fde24f",
          icons: "#fde24f",
        },
      },
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
      color: "text",
      bg: "muted",
      fontSize: 1,
      p: 1,
    },
    pre: {
      ...github,
      fontSize: 1,
      p: 3,
    },
  },
}
