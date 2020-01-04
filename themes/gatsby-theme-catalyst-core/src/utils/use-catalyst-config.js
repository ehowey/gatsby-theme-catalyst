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
          useHero
          invertSiteLogo
          mobileMenuBreakpoint
          useStickyHeader
          useSocialLinks
          useColorMode
        }
      }
    `
  )
  return catalystConfig
}
