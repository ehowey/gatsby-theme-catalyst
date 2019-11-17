import merge from "deepmerge"
import { BaseThemeStyles } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeStyles, {
  h1: {
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    m: 0,
    mb: 4,
    fontSize: 6,
    mt: 4,
    display: "flex",
    alignItems: "center",
    "::after": {
      flex: "1",
      content: '""',
      width: "100%",
      borderColor: "primary",
      borderTopWidth: "16px",
      borderTopStyle: "dotted",
      ml: 2,
      mt: "4px",
      opacity: "0.3",
    },
  },
  h2: {
    fontFamily: "heading",
    fontWeight: "heading",
    lineHeight: "heading",
    m: 0,
    mb: 2,
    fontSize: 5,
    mt: 3,
    display: "flex",
    alignItems: "center",
    "::after": {
      flex: "1",
      content: '""',
      width: "100%",
      borderColor: "primary",
      borderTopWidth: "8px",
      borderTopStyle: "dotted",
      ml: 2,
      mt: "4px",
      opacity: "0.3",
    },
  },
})
