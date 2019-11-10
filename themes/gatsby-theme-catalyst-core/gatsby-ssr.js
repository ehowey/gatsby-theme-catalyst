import React from "react"
import { NavProvider } from "./src/contexts/nav-context"
import { MobileProvider } from "./src/contexts/mobile-context"
import { HomeProvider } from "./src/contexts/home-context"
import Layout from "./src/components/layout"
import NormalizeCSS from "./src/utils/normalize-css"

export const wrapRootElement = ({ element }) => {
  return (
    <HomeProvider>
      <NavProvider>{element}</NavProvider>
    </HomeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <MobileProvider>
      <Layout {...props}>
        <NormalizeCSS />
        {element}
      </Layout>
    </MobileProvider>
  )
}
