import React from "react"
import { Layout } from "theme-ui"
import Header from "./header/header"
import Main from "./main"
import Container from "./container"
import Footer from "./footer/footer"

const SiteLayout = props => {
  return (
    <Layout>
      <Header />
      <Main>
        <Container>{props.children}</Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default SiteLayout
