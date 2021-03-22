import React from "react"
import { NavProvider } from "./src/utils/nav-context"
import { MDXProvider } from "@mdx-js/react"
import SEO from "./src/utils/seo"

export const wrapRootElement = ({ element }) => {
  return (
    <NavProvider>
      <MDXProvider components={{ SEO }}>{element}</MDXProvider>
    </NavProvider>
  )
}
