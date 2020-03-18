/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useEffect } from "react"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import Normalize from "../utils/normalize-css"
import SiteContainer from "./site-container"
import Header from "./header"
import Main from "./main"
import ContentContainer from "./content-container"
import Footer from "./footer"
import { useLocation } from "@reach/router"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { useContext } from "react"

const SiteLayout = ({ children }) => {
  const [isHome, setIsHome] = useContext(HomeContext)
  const location = useLocation()
  const home = location.pathname === "/"
  useEffect(() => {
    if (home) {
      setIsHome(true)
    } else {
      setIsHome(false)
    }
  }, [])
  return (
    <Styled.root>
      <Normalize />
      <SiteContainer>
        <SkipNavLink />
        <Header />
        <Main>
          <SkipNavContent />
          <ContentContainer>{children}</ContentContainer>
        </Main>
        <Footer />
      </SiteContainer>
    </Styled.root>
  )
}

export default SiteLayout
