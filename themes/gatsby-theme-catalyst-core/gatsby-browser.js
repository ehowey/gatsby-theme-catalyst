import React from "react"
import { NavProvider } from "./src/contexts/nav-context"
import { MobileProvider } from "./src/contexts/mobile-context"
import { HomeProvider } from "./src/contexts/home-context"
import Layout from "./src/components/layout"
import NormalizeCSS from "./src/utils/normalize-css"

export const wrapRootElement = ({ element }) => {
  return <NavProvider>{element}</NavProvider>
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <HomeProvider>
      <MobileProvider>
        <Layout {...props}>
          <NormalizeCSS />
          {element}
        </Layout>
      </MobileProvider>
    </HomeProvider>
  )
}
