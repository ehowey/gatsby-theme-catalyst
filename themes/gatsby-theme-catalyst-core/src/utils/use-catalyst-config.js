import { useStaticQuery, graphql } from "gatsby"
export const useCatalystConfig = () => {
  const { catalystConfig } = useStaticQuery(
    graphql`
      query {
        catalystConfig {
          contentPath
          assetPath
          displaySiteLogo
          displaySiteTitle
          displaySiteLogoMobile
          displaySiteTitleMobile
          invertSiteLogo
          mobileMenuBreakpoint
          useStickyHeader
          useSocialLinks
          useColorMode
          footerContentLocation
          useKatex
        }
      }
    `
  )
  return catalystConfig
}
