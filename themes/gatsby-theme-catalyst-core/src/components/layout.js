import React from "react"
import { Layout } from "theme-ui"
import Header from "./header"
import Hero from "./hero"
import Main from "./main"
import Container from "./container"
import Footer from "./footer"
import { useCatalystConfig } from "../utils/use-catalyst-config"

const SiteLayout = ({ children }) => {
  const { useHero } = useCatalystConfig()
  return (
    <Layout>
      <Header />
      {useHero && <Hero />}
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default SiteLayout
