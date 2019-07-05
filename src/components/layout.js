import React from "react"
import { css, Global } from "@emotion/core"
import { Layout, Main, Container, Footer } from "theme-ui"
import Header from './header'

const siteLayout = ({ children }) => {
  return (
    <Layout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <h2>Here is the footer</h2>
      </Footer>
    </Layout>
  )
}

export default siteLayout