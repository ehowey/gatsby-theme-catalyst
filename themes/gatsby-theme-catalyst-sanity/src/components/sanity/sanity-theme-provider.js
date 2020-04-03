/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import { Fragment } from "react"
import {
  useSanityConfig,
  useThemeFromSanity,
} from "gatsby-theme-catalyst-sanity"

const SanityThemeProvider = ({ children }) => {
  const theme = useThemeFromSanity()
  const { useSanityTheme } = useSanityConfig()
  if (useSanityTheme) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  } else {
    return <Fragment>{children}</Fragment>
  }
}

export default SanityThemeProvider
