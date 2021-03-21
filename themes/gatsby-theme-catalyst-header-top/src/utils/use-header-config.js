import { useStaticQuery, graphql } from "gatsby"
export const useHeaderConfig = () => {
  const { catalystHeaderTopConfig } = useStaticQuery(
    graphql`
      query {
        catalystHeaderTopConfig {
          useStickyHeader
          useSocialLinks
          useColorMode
        }
      }
    `
  )
  return catalystHeaderTopConfig
}
