import React from "react"
import { NavProvider } from "./src/contexts/nav-context"
import { HomeProvider } from "./src/contexts/home-context"
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

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector("#reach-skip-nav")
    if (skipLink) {
      skipLink.focus()
    }
  }
}
