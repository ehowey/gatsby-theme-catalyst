import { useStaticQuery, graphql } from "gatsby"
export const useCatalystConfig = () => {
  const { catalystConfig } = useStaticQuery(
    graphql`
      query {
        catalystConfig {
          displaySiteLogo
          displaySiteTitle
          headerPosition
          invertSiteLogo
          mobileMenuBreakpoint
          navType
        }
      }
    `
  )
  return catalystConfig
}
