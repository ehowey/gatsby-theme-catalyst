import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"

export default merge(BaseTheme, {
  // Modifications to the base theme go here. This is an example changing colors and using variants to change your navigation links. Uncomment the code below to see what happens.
  fontWeights: {
    heading: "500",
  },
  colors: {
    ...tailwind.colors,
    background: baseColors.gray[1], //Try "#954264",
    text: baseColors.gray[9],
    primary: baseColors.red[7],
    secondary: baseColors.yellow[7],
    accent: baseColors.red[2],
    highlight: baseColors.orange[5],
    muted: baseColors.gray[2],
    header: {
      background: baseColors.gray[2],
      backgroundOpen: baseColors.orange[1],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsOpen: baseColors.gray[6],
    },
    footer: {
      background: "transparent",
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    // You can delete dark mode by removing the "mode" object and/or setting useColorMode to false in gatsby-theme-catalyst-core
    modes: {
      dark: {
        background: baseColors.gray[9],
        text: baseColors.gray[1],
        primary: baseColors.red[5],
        secondary: baseColors.yellow[5],
        accent: baseColors.red[2],
        muted: baseColors.gray[8],
        header: {
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
          background: "#232946",
          backgroundOpen: baseColors.gray[8],
          icons: baseColors.gray[1],
          iconsOpen: baseColors.gray[1],
        },
        footer: {
          background: "transparent",
          text: baseColors.gray[1],
          links: baseColors.gray[1],
          icons: baseColors.gray[1],
        },
      },
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthXS: "50px", // Logo width on extra small screens, up to 480px
    logoWidthS: "50px", // Logo width on small screens, 480px - 768px
    logoWidthM: "80px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "100px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "100px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "50px", // Logo height on extra small screens, up to 480px
    logoHeightS: "50px", // Logo height on small screens, 480px - 768px
    logoHeightM: "80px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "100px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "100px", // Logo height on extra large screens, above 1440px
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "24px", // Sets the icons size for the header
  },
  styles: {
    a: {
      color: "primary",
      textDecoration: "underline",
      transition: "all 0.3s ease",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "500",
      lineHeight: "heading",
      textTransform: "uppercase",
      position: "relative",
      fontSize: [4, 5, 6, null, null],
      "::after": {
        display: "block",
        content: '""',
        width: "60px",
        pt: 2,
        borderBottomStyle: "solid",
        borderBottomWidth: "4px",
        borderBottomColor: "primary",
      },
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 1,
      fontSize: 3,
      mt: 4,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 1,
      fontSize: 3,
      mt: 3,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 1,
      fontSize: 2,
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 1,
      fontSize: 2,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 2,
      fontSize: 1,
    },
  },
  buttons: {
    dropdown: {
      cursor: "pointer",
      backgroundColor: "header.background",
      text: "header.text",
      py: 0,
      px: 1,
      fontWeight: "400",
      ":hover, :focus, :active": {
        textDecoration: "underline",
        textDecorationThickness: "0.125em",
        color: "primary",
      },
    },
  },
  variants: {
    siteTitle: {
      fontWeight: "500",
      textTransform: "uppercase",
      fontSize: "1.5rem !important",
      textAlign: "center",
      mt: 3,
      letterSpacing: "wide",
      "::after": {
        content: "none",
      },
    },
    header: {
      py: [1, null, 0, 0, 0],
      width: ["auto", null, "300px", "350px", "425px"],
    },
    navUl: {
      textAlign: ["center", null, "left", null, null],
      alignItems: ["center", null, "start", null, null],
    },
    navUlSub: {
      mb: 3,
    },
    navLink: {
      fontWeight: "400",
    },
    navLiSub: {
      "a:hover::before": {
        textDecoration: "none !important",
      },
      pb: 2,
      ":first-of-type": { pt: 2 },
      ":last-of-type": { pb: 0 },
    },
    navLinkSub: {
      display: "flex",
      lineHeight: "tight",
      textAlign: "left",
      // ":hover": {
      //   textDecoration: "underline",
      // },

      ":before": {
        content: "'\\2192'",
        display: "block",
        pr: 2,
      },
    },
  },
})
