import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"

const theme = merge(BaseTheme, {
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
      background: "#ffdada",
      backgroundOpen: "#ffdada",
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
    // You can delete dark mode by removing the "mode" object and setting useColorMode to false in the header theme
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
    li: {
      marginBottom: 2,
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
      mt: [4, null, 5, null, null],
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 1,
      fontSize: 2,
      mt: [3, null, 4, null, null],
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 1,
      fontSize: 1,
    },
    h5: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 1,
      fontSize: 0,
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      textTransform: "uppercase",
      m: 0,
      mb: 2,
      fontSize: 0,
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

export default theme
