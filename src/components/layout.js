import React from "react"
import { css, Global } from "@emotion/core"
import { Layout } from "theme-ui"
import Header from "./header"
import Main from "./main"
import Container from "./container"
import Footer from "./footer"
import { NavProvider } from "./contexts/navContext"
import { MobileProvider } from "./contexts/mobileContext"
import { WindowSizeProvider } from "./contexts/windowSizeContext"

const SiteLayout = props => {
  return (
    <WindowSizeProvider>
      <MobileProvider>
        <NavProvider>
          <Layout>
            <Global
              styles={css`
                html {
                  box-sizing: border-box;
                }

                *,
                *:before,
                *:after {
                  box-sizing: inherit;
                }

                body {
                  margin: 0;
                  padding: 0;
                }
              `}
            />

            <Header />

            <Main>
              <Container>{props.children}</Container>
            </Main>
            <Footer />
          </Layout>
        </NavProvider>
      </MobileProvider>
    </WindowSizeProvider>
  )
}

export default SiteLayout
