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
          useHero
          invertSiteLogo
          mobileMenuBreakpoint
          useStickyHeader
          useSocialLinks
          useColorMode
          isHeaderSideLeft
          footerContentLocation
        }
      }
    `
  )
  return catalystConfig
}
