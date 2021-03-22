import { useStaticQuery, graphql } from "gatsby"
export const useHeaderConfig = () => {
  const { catalystHeaderSideConfig } = useStaticQuery(
    graphql`
      query {
        catalystHeaderSideConfig {
          useStickyHeader
          useHeaderSocialLinks
          useColorMode
        }
      }
    `
  )
  return catalystHeaderSideConfig
}
