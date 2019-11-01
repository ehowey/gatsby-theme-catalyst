import React, { useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "theme-ui"
import NormalizeCSS from "./utils/normalize-css"
import Header from "./header/header"
import Main from "./main"
import Container from "./container"
import Footer from "./footer/footer"
import { MobileContext } from "../contexts/mobile-context"
import { useWindowSize } from "../contexts/windowsize-context"

const SiteLayout = props => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        mobileMenuBreakpoint
      }
    }
  `)
  // eslint-disable-next-line
  const [mobile, setMobile] = useContext(MobileContext)
  const { width } = useWindowSize()
  const mobileBreakpoint = parseInt(data.catalystConfig.mobileMenuBreakpoint)

  useEffect(() => {
    if (width < mobileBreakpoint) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width, mobileBreakpoint, setMobile])

  return (
    <Layout>
      <NormalizeCSS />
      <Header />
      <Main>
        <Container>{props.children}</Container>
      </Main>
      <Footer />
    </Layout>
  )
}

export default SiteLayout
