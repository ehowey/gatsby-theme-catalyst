/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useEffect } from "react"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import GlobalCSS from "gatsby-theme-catalyst-core/src/utils/global-css"
import Footer from "gatsby-theme-catalyst-footer/src/gatsby-theme-catalyst-core/components/footer"
import { useLocation } from "@reach/router"
import { HomeContext, useSiteMetadata } from "gatsby-theme-catalyst-core"
import { useContext } from "react"
import Header from "./docs-header/header"
import Img from "gatsby-image"
import { Link } from "gatsby"

const SiteLayout = ({ children }) => {
  const [isHome, setIsHome] = useContext(HomeContext) // eslint-disable-line
  const location = useLocation()
  const home = location.pathname === "/"
  const { logo } = useSiteMetadata()
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
          gridTemplateColumns: [
            "minmax(0, 1fr)",
            null,
            "auto minmax(0, 1fr)",
            null,
            null,
          ],
          gridTemplateRows: [
            "auto minmax(0, 1fr) auto",
            null,
            "minmax(0, 1fr) auto",
            null,
            null,
          ],
          gridTemplateAreas: [
            `
        "header"
        "main"
        "footer"
        `,
            null,
            `
        "header main"
        "header footer"
        `,
            null,
            null,
          ],
          variant: "variants.siteContainer",
        }}
      >
        <SkipNavLink />
        <Header />
        <main
          sx={{
            gridArea: "main",
          }}
        >
          <SkipNavContent />
          <div
            sx={{
              maxWidth: "maxContentWidth",
              mt: 3,
              mb: 5,
              mx: "auto",
              px: 3,
              variant: "variants.contentContainer",
            }}
          >
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </Styled.root>
  )
}

export default SiteLayout
