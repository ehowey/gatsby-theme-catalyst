/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useEffect } from "react"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import GlobalCSS from "gatsby-theme-catalyst-core/src/utils/global-css"
import SiteContainer from "gatsby-theme-catalyst-core/src/components/site-container"
import Main from "gatsby-theme-catalyst-core/src/components/main"
import ContentContainer from "gatsby-theme-catalyst-core/src/components/content-container"
import Footer from "gatsby-theme-catalyst-core/src/components/footer"
import { useLocation } from "@reach/router"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { useContext } from "react"
import Hero from "./hero"

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
    <Styled.root>
      <GlobalCSS />
      <div
        sx={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gridTemplateRows: "auto minmax(0, 1fr) auto",
          gridTemplateAreas: `
        "header" 
        "main"
        "footer"
        `,
          variant: "variants.siteContainer",
        }}
      >
        {" "}
        <SkipNavLink />
        <Hero />
        <Main>
          <SkipNavContent />
          <ContentContainer>{children}</ContentContainer>
        </Main>
        <Footer />
      </div>
    </Styled.root>
  )
}

export default SiteLayout
