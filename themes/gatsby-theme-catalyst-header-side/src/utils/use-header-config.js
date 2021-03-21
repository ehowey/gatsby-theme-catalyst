import { useStaticQuery, graphql } from "gatsby"
export const useHeaderConfig = () => {
  const { catalystHeaderSideConfig } = useStaticQuery(
    graphql`
      query {
        catalystHeaderSideConfig {
          useStickyHeader
          useSocialLinks
          useColorMode
        }
      }
    `
  )
  return catalystHeaderSideConfig
}
