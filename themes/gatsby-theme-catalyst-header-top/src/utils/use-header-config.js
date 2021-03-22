import { useStaticQuery, graphql } from "gatsby"
export const useHeaderConfig = () => {
  const { catalystHeaderTopConfig } = useStaticQuery(
    graphql`
      query {
        catalystHeaderTopConfig {
          useStickyHeader
          useHeaderSocialLinks
          useColorMode
        }
      }
    `
  )
  return catalystHeaderTopConfig
}
