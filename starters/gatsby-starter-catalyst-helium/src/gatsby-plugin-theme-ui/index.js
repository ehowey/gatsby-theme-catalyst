import { merge } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { darken } from "@theme-ui/color"

export default merge(BaseTheme, {
  colors: {
    primary: "#e6da00",
    secondary: "#9933CC",
    muted: "#ecf3f8",
    accent: "#fffee4",
    link: "#9933CC",
    header: {
      background: "transparent",
      backgroundOpen: baseColors.gray[2],
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
        primary: "#e6da00",
        secondary: "#9933CC",
        muted: "#1a2431",
        accent: "#363636",
        link: "#e6da00",
        header: {
          background: "transparent",
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
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
    logoWidthXS: "40px", // Logo width on extra small screens, up to 480px
    logoWidthS: "40px", // Logo width on small screens, 480px - 768px
    logoWidthM: "120px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "130px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "140px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "40px", // Logo height on extra small screens, up to 480px
    logoHeightS: "40px", // Logo height on small screens, 480px - 768px
    logoHeightM: "120px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "130px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "140px", // Logo height on extra large screens, above 1440px
  },
  styles: {
    a: {
      color: "link",
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "normal",
      lineHeight: "heading",
      m: 0,
      mb: 1,
      fontSize: [5, null, 6, null, null],
      mt: 2,
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "wide",
      display: "flex",
      alignItems: "center",
      "::after": {
        content: '""',
        flex: "1",
        height: "4px",
        backgroundColor: "text",
        ml: 3,
        mt: "8px",
        display: "inline",
      },
      "::before": {
        content: '""',
        flex: "1",
        height: "4px",
        backgroundColor: "text",
        mr: 3,
        mt: "8px",
        display: "inline",
      },
    },
  },
  variants: {
    siteContainer: {
      backgroundImage: [
        `url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232b6cb0' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232b6cb0' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        `url("data:image/svg+xml,%3Csvg width='1400' height='1400' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232b6cb0' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        null,
        `url("data:image/svg+xml,%3Csvg width='1500' height='1500' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232b6cb0' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      ],
    },
    header: {
      bg: ["background", null, "transparent", null, null],
      borderBottomStyle: ["solid", null, "none", null, null],
      borderBottomWidth: "2px",
      borderBottomColor: "primary",
    },
    siteTitle: {
      fontSize: [3, null, 7, 8, null],
      letterSpacing: "widest",
      fontWeight: "bold",
      textTransform: "uppercase",
      bg: "transparent",
      ":after": {
        content: "none",
      },
      ":before": {
        content: "none",
      },
    },
    postListTitle: {
      textAlign: "center",
      maxWidth: "maxPageWidth",
      mx: "auto",
      px: 3,
    },
    postListContent: {
      borderRadius: "0.25rem",
    },
    postListImage: {
      borderRadius: "0.25rem",
    },
    nav: {
      my: 3,
      "::before": {
        content: ["none", null, '""', null, null],
        flex: "1",
        height: "4px",
        backgroundColor: "primary",
        mr: 3,
        mt: 3,
        display: "inline",
      },
      "::after": {
        content: ["none", null, '""', null, null],
        flex: "1",
        height: "4px",
        backgroundColor: "primary",
        ml: 3,
        mt: 3,
        display: "inline",
      },
    },
    navLink: {
      bg: "primary",
      color: baseColors.gray[8],
      px: 3,
      borderRadius: "0.25rem",
      transition: "all 0.3s ease-in-out",
      ":hover": {
        textDecoration: "none",
        color: baseColors.gray[9],
        bg: darken("primary", 0.08),
      },
    },
    navLinkActive: {
      textDecoration: "none",
      color: baseColors.gray[9],
      bg: darken("primary", 0.08),
    },
    navLi: {
      mb: [3, null, 0, null, null],
      mr: [0, null, 3, null, null],
      ":last-of-type": {
        mr: 0,
      },
    },
  },
})
