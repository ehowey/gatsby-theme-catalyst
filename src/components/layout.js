import React from "react"
import { Layout } from "theme-ui"
import NormalizeCSS from "./utils/normalize-css"
import Header from "./header"
import Main from "./main"
import Container from "./container"
import Footer from "./footer"
import { NavProvider } from "./contexts/nav-context"
import { MobileProvider } from "./contexts/mobile-context"
import { WindowSizeProvider } from "./contexts/windowsize-context"
import { HeaderHeightProvider } from "./contexts/header-height-context"

const SiteLayout = props => {
  return (
    <WindowSizeProvider>
      <MobileProvider>
        <NavProvider>
          <HeaderHeightProvider>
            <Layout>
              <NormalizeCSS />
              <Header />
              <Main>
                <Container>{props.children}</Container>
              </Main>
              <Footer />
            </Layout>
          </HeaderHeightProvider>
        </NavProvider>
      </MobileProvider>
    </WindowSizeProvider>
  )
}

export default SiteLayout
