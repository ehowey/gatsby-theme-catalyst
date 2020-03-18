import React from "react"
import { NavProvider } from "./src/utils/nav-context"
import { HomeProvider } from "./src/utils/home-context"
import { MDXProvider } from "@mdx-js/react"
import SEO from "./src/utils/seo"

export const wrapRootElement = ({ element }) => {
  return (
    <HomeProvider>
      <NavProvider>
        <MDXProvider components={{ SEO }}>{element}</MDXProvider>
      </NavProvider>
    </HomeProvider>
  )
}
