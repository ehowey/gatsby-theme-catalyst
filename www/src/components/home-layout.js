/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import GlobalCSS from "gatsby-theme-catalyst-core/src/utils/global-css"
import Main from "gatsby-theme-catalyst-core/src/components/main"
import ContentContainer from "gatsby-theme-catalyst-core/src/components/content-container"
import Footer from "./home-footer"
import Hero from "./hero"
import { baseColors } from "@theme-ui/preset-tailwind"

const SiteLayout = ({ children }) => {
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
