import { useStaticQuery, graphql } from "gatsby"
export const useHeaderConfig = () => {
  const { catalystHeaderBigTopConfig } = useStaticQuery(
    graphql`
      query {
        catalystHeaderBigTopConfig {
          useSocialLinks
          useColorMode
        }
      }
    `
  )
  return catalystHeaderBigTopConfig
}
