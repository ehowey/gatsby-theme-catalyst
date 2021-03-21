/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useEffect } from "react"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import GlobalCSS from "../utils/global-css"
import SiteContainer from "./site-container"
import Header from "./header"
import Main from "./main"
import ContentContainer from "./content-container"
import Footer from "./footer"
import { useLocation } from "@reach/router"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { useContext } from "react"

const SiteLayout = ({ children }) => {
  const [isHome, setIsHome] = useContext(HomeContext) // eslint-disable-line
  const location = useLocation()
  const home = location.pathname === "/"
  useEffect(() => {
    if (home) {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, []) // eslint-disable-line
  return (
    <Themed.root>
      <GlobalCSS />
      <SiteContainer>
        <SkipNavLink />
        <Header />
        <Main>
          <SkipNavContent />
          <ContentContainer>{children}</ContentContainer>
        </Main>
        <Footer />
      </SiteContainer>
    </Themed.root>
  )
}

export default SiteLayout
