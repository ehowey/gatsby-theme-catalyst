/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useEffect } from "react"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import GlobalCSS from "gatsby-theme-catalyst-core/src/utils/global-css"
import Main from "gatsby-theme-catalyst-core/src/components/main"
import ContentContainer from "gatsby-theme-catalyst-core/src/components/content-container"
import Footer from "./home-footer"
import { useLocation } from "@reach/router"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { useContext } from "react"
import Hero from "./hero"
import { baseColors } from "@theme-ui/preset-tailwind"

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
    <Themed.root sx={{ bg: "#ffe4e4", color: baseColors.gray[8] }}>
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
        <SkipNavLink />
        <Hero />
        <Main>
          <SkipNavContent />
          <ContentContainer>{children}</ContentContainer>
        </Main>
        <Footer />
      </div>
    </Themed.root>
  )
}

export default SiteLayout
