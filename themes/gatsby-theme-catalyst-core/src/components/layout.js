/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import GlobalCSS from "../utils/global-css"
import SiteContainer from "./site-container"
import Header from "./header"
import Main from "./main"
import ContentContainer from "./content-container"
import Footer from "./footer"

const SiteLayout = ({ children }) => {
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
