import { merge } from "theme-ui"
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import "typeface-quando"

export default merge(BaseTheme, {
  // Modifications to the theme go here.
  fonts: {
    ...tailwind.fonts,
    body:
      'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: '"Quando", "Times New Roman", Times, serif',
    monospace:
      'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
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
      background: baseColors.gray[1],
      backgroundOpen: baseColors.blue[2],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsOpen: baseColors.gray[8],
    },
    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    // You can delete dark mode by removing the "mode" object and/or setting useColorMode to false in gatsby-theme-catalyst-core
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
          background: baseColors.gray[9],
          backgroundOpen: baseColors.gray[8],
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
          icons: baseColors.gray[1],
          iconsOpen: baseColors.gray[1],
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
  styles: {
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 4,
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
  },
  variants: {
    siteTitle: {
      fontSize: [3, 4, null, 5, null],
      "::after": {
        content: "none",
      },
    },
    navLink: {
      fontFamily: "heading",
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "1px",
        backgroundColor: "primary",
        content: "''",
        opacity: "0",
        transition: "height 0.3s, opacity 0.3s, transform 0.3s",
        transform: "translateY(-6px)",
      },
      ":hover, :focus, :active": {
        textDecoration: "none",
        color: "primary",
      },
      ":hover::after, :active::after, :focus::after": {
        height: "4px",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkActive: {
      textDecoration: "none",
      color: "primary",
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "4px",
        backgroundColor: "primary",
        content: "''",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkSub: {
      "::after": {
        content: "none",
      },
      ":hover::after": {
        content: "none",
      },
      ":hover, :focus, :active": {
        color: "primary",
      },
    },
    navLinkSubActive: {
      textDecoration: "none",
      color: "primary",
      "::after": {
        content: "none",
      },
    },
  },
})
