import { useStaticQuery, graphql } from "gatsby"
export const useCatalystConfig = () => {
  const { catalystConfig } = useStaticQuery(
    graphql`
      query {
        catalystConfig {
          contentPath
          assetPath
          useKatex
          useAlertBanner
        }
      }
    `
  )
  return catalystConfig
}
