import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout } from "theme-ui"
import Header from "./header/header"
import Main from "./main"
import Container from "./container"
import Footer from "./footer/footer"
import { MobileContext } from "../contexts/mobile-context"

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
  const mobileBreakpoint = data.catalystConfig.mobileMenuBreakpoint

  const WidthChange = mq => {
    if (typeof window !== "undefined" && mq.matches) {
      return setMobile(false)
    } else {
      return setMobile(true)
    }
  }

  // media query event handler
  if (typeof window !== "undefined" && matchMedia) {
    const mq = window.matchMedia("(min-width:" + mobileBreakpoint + ")")
    mq.addListener(WidthChange)
    WidthChange(mq)
  }

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
