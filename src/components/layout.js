import React from "react"
import { css, Global } from "@emotion/core"
import { Layout, Main, Container, Footer } from "theme-ui"
import Header from "./header"

const siteLayout = ({ children }) => {
  return (
    <Layout>
      <Global
        styles={css`
          html {
            box-sizing: border-box;
            font-size: 20px;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          body, h1, h2, h3, h4, h5, h6, p, ol, ul {
            margin: 0;
            padding: 0;
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
