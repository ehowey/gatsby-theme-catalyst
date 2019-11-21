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
      borderColor: "secondary",
      borderTopWidth: "16px",
      borderTopStyle: "dotted",
      ml: 2,
      mt: "4px",
      opacity: "0.3",
    },
  },
})
