/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import Normalize from "../utils/normalize-css"
import SiteContainer from "./site-container"
import Header from "./header"
import Main from "./main"
import Hero from "./hero"
import ContentContainer from "./content-container"
import Footer from "./footer"
import { useCatalystConfig } from "../utils/use-catalyst-config"

const SiteLayout = ({ children }) => {
  const { useHero } = useCatalystConfig()
  return (
    <Styled.root>
      <Normalize />
      <SiteContainer>
        <SkipNavLink />
        <Header />
        <Main>
          <SkipNavContent />
          {useHero && <Hero />}
          <ContentContainer>{children}</ContentContainer>
        </Main>
        <Footer />
      </SiteContainer>
    </Styled.root>
  )
}

export default SiteLayout
