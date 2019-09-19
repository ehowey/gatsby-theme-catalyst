import React from "react"
import { css, Global } from "@emotion/core"
import { Layout } from "theme-ui"
import Header from "./header"
import Main from "./main"
import Container from "./container"
import Footer from "./footer"
import { NavProvider } from "./navContext"

const SiteLayout = props => {
  return (
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
      <NavProvider>
        <Header />
      </NavProvider>
      <Main>
        <Container>{props.children}</Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default SiteLayout
