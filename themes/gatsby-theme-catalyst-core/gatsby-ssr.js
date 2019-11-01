import React from "react"
import { NavProvider } from "./src/contexts/nav-context"
import { MobileProvider } from "./src/contexts/mobile-context"
import { WindowSizeProvider } from "./src/contexts/windowsize-context"
import { HeaderHeightProvider } from "./src/contexts/header-height-context"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  return (
    <WindowSizeProvider>
      <MobileProvider>
        <NavProvider>
          <HeaderHeightProvider>{element}</HeaderHeightProvider>
        </NavProvider>
      </MobileProvider>
    </WindowSizeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
