/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from "theme-ui"
import { useEffect } from "react"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import Normalize from "gatsby-theme-catalyst-core/src/utils/normalize-css"
import SiteContainer from "gatsby-theme-catalyst-core/src/components/site-container"
import Header from "gatsby-theme-catalyst-core/src/components/header"
import Main from "gatsby-theme-catalyst-core/src/components/main"
import ContentContainer from "gatsby-theme-catalyst-core/src/components/content-container"
import Footer from "gatsby-theme-catalyst-core/src/components/footer"
import { useLocation } from "@reach/router"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { useContext } from "react"
import sanityTheme from "../../components/sanity/theme"

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
  const x = sanityTheme()
  console.log(x)
  return (
    <ThemeProvider theme={x}>
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
    </ThemeProvider>
  )
}

export default SiteLayout
