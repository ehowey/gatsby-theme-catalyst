/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Normalize from "../utils/normalize-css"
import Header from "./header"
import Main from "./main"
import SiteContainer from "./site-container"
import Footer from "./footer"

const SiteLayout = ({ children }) => {
  return (
    <Styled.root>
      <Normalize />
      <SiteContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </SiteContainer>
    </Styled.root>
  )
}

export default SiteLayout
