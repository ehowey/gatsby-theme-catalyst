import React from "react"
import { NavProvider } from "./src/utils/nav-context"
import { AlertProvider } from "./src/utils/alert-context"
import { MDXProvider } from "@mdx-js/react"
import Seo from "./src/utils/seo"

export const wrapRootElement = ({ element }) => {
  return (
    <AlertProvider>
      <NavProvider>
        <MDXProvider components={{ Seo }}>{element}</MDXProvider>
      </NavProvider>
    </AlertProvider>
  )
}
