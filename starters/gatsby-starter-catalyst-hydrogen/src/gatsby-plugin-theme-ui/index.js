import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { baseColors } from "@theme-ui/preset-tailwind"

export default merge(BaseTheme, {
  colors: {
    primary: baseColors.red[8],
    secondary: baseColors.red[5],
    accent: baseColors.gray[2],
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
  styles: {
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
  },
  variants: {
    siteTitle: {
      fontSize: [4, null, null, 5, null],
      "::after": {
        display: "none",
      },
    },
    navLink: {
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
      },
      ":hover::after, :active::after, :focus::after": {
        height: "4px",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkActive: {
      textDecoration: "none",
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
