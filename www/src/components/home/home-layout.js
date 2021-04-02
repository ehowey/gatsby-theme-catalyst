/** @jsx jsx */
import { jsx } from "theme-ui"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import { baseColors } from "@theme-ui/preset-tailwind"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import GlobalCSS from "gatsby-theme-catalyst-core/src/utils/global-css"
import Main from "gatsby-theme-catalyst-core/src/components/main"
import ContentContainer from "gatsby-theme-catalyst-core/src/components/content-container"
import AlertBanner from "../alert-banner"
import Footer from "./home-footer"
import Hero from "./home-hero"

const HomeLayout = ({ children }) => {
  const { useAlertBanner } = useCatalystConfig()
  return (
    <div
      sx={{
        bg: "#ffe4e4",
        color: baseColors.gray[8],
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        gridTemplateRows: useAlertBanner
          ? "auto auto minmax(0, 1fr) auto"
          : "auto minmax(0, 1fr) auto",
        gridTemplateAreas: useAlertBanner
          ? [
              `
        "alert"
        "header" 
        "main"
        "footer"
        `,
              null,
              `
        "alert"
        "header" 
        "main"
        "footer"
        `,
              null,
              null,
            ]
          : `
        "header" 
        "main"
        "footer"
        `,
        variant: "variants.siteContainer",
      }}
    >
      <GlobalCSS />
      <SkipNavLink />
      <AlertBanner />
      <Hero />
      <Main>
        <SkipNavContent />
        <ContentContainer>{children}</ContentContainer>
      </Main>
      <Footer />
    </div>
  )
}

export default HomeLayout

// /** @jsx jsx */
// import { jsx } from "theme-ui"
// import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
// import GlobalCSS from "../utils/global-css"
// import SiteContainer from "./site-container"
// import AlertBanner from "./alert-banner"
// import Header from "./header"
// import Main from "./main"
// import ContentContainer from "./content-container"
// import Footer from "./footer"

// const SiteLayout = ({ children }) => {
//   return (
//     <SiteContainer>
//       <GlobalCSS />
//       <SkipNavLink />
//       <AlertBanner />
//       <Header />
//       <Main>
//         <SkipNavContent />
//         <ContentContainer>{children}</ContentContainer>
//       </Main>
//       <Footer />
//     </SiteContainer>
//   )
// }

// export default SiteLayout
