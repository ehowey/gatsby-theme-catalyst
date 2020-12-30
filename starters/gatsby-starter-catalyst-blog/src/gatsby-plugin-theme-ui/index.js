import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"

export default merge(BaseTheme, {
  // Modifications to the base theme go here. This is an example changing colors and using variants to change your navigation links. Uncomment the code below to see what happens.
  colors: {
    ...tailwind.colors,
    background: baseColors.gray[1], //Try "#954264",
    text: baseColors.gray[8],
    textGray: "#6e6e6e",
    primary: baseColors.blue[7],
    secondary: baseColors.orange[7],
    accent: baseColors.orange[2],
    highlight: baseColors.orange[5],
    muted: baseColors.gray[2],
    header: {
      background: baseColors.gray[2],
      backgroundOpen: baseColors.blue[2],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsOpen: baseColors.gray[6],
    },
    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    // You can delete dark mode by removing the "modes" object and setting useColorMode to false in gatsby-theme-catalyst-core
    modes: {
      dark: {
        background: baseColors.gray[9],
        text: baseColors.gray[1],
        textGray: "#9f9f9f",
        primary: "#458ad2",
        secondary: baseColors.orange[7],
        accent: baseColors.gray[8],
        highlight: baseColors.orange[5],
        muted: baseColors.gray[8],
        header: {
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
          background: "#232946",
          backgroundOpen: baseColors.gray[8],
          icons: baseColors.gray[5],
          iconsOpen: baseColors.gray[5],
        },
        footer: {
          background: "#232946",
          text: baseColors.gray[1],
          links: baseColors.gray[1],
          icons: baseColors.gray[1],
        },
      },
    },
  },
  sizes: {
    logoWidthXS: "40px", // Logo width on extra small screens, up to 480px
    logoWidthS: "40px", // Logo width on small screens, 480px - 768px
    logoWidthM: "80px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "100px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "100px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "40px", // Logo height on extra small screens, up to 480px
    logoHeightS: "40px", // Logo height on small screens, 480px - 768px
    logoHeightM: "80px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "100px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "100px", // Logo height on extra large screens, above 1440px
  },
  buttons: {
    dropdown: {
      cursor: "pointer",
      backgroundColor: "header.background",
      text: "header.text",
      fontWeight: "bold",
      py: 0,
      px: 1,
      ":hover, :focus, :active": {
        textDecoration: "underline",
        textDecorationThickness: "0.125em",
        color: "primary",
      },
    },
  },
  variants: {
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
    },
  },
})
