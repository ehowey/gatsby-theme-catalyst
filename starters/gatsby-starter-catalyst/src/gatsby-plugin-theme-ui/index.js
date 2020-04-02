import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  // Modifications to the base theme go here.
  // variants: {
  //   navLink: {
  //     "::after": {
  //       position: "absolute",
  //       top: "100%",
  //       left: "0",
  //       width: "100%",
  //       height: "1px",
  //       backgroundColor: "primary",
  //       content: "''",
  //       opacity: "0",
  //       transition: "height 0.3s, opacity 0.3s, transform 0.3s",
  //       transform: "translateY(-6px)",
  //     },
  //     ":hover, :focus, :active": {
  //       textDecoration: "none",
  //     },
  //     ":hover::after, :active::after, :focus::after": {
  //       height: "4px",
  //       opacity: "1",
  //       transform: "translateY(0px)",
  //     },
  //   },
  //   navLinkActive: {
  //     textDecoration: "none",
  //     "::after": {
  //       position: "absolute",
  //       top: "100%",
  //       left: "0",
  //       width: "100%",
  //       height: "4px",
  //       backgroundColor: "primary",
  //       content: "''",
  //       opacity: "1",
  //       transform: "translateY(0px)",
  //     },
  //   },
  //   navLinkSub: {
  //     "::after": {
  //       content: "none",
  //     },
  //     ":hover::after": {
  //       content: "none",
  //     },
  //     ":hover, :focus, :active": {
  //       color: "primary",
  //     },
  //   },
  //   navLinkSubActive: {
  //     textDecoration: "none",
  //     color: "primary",
  //     "::after": {
  //       content: "none",
  //     },
  //   },
  // },
})
