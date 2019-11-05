import React from "react"
import { NavProvider } from "./src/contexts/nav-context"
import { MobileProvider } from "./src/contexts/mobile-context"
import { HeaderHeightProvider } from "./src/contexts/header-height-context"
import Layout from "./src/components/layout"
import NormalizeCSS from "./src/utils/normalize-css"

export const wrapRootElement = ({ element }) => {
  return (
    <NavProvider>
      <HeaderHeightProvider>{element}</HeaderHeightProvider>
    </NavProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <MobileProvider>
      <Layout {...props}>
        <NormalizeCSS />
        {element}
      </Layout>
    </MobileProvider>
  )
}
