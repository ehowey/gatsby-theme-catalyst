import { useStaticQuery, graphql } from "gatsby"
export const useBeryConfig = () => {
  const { catalystBeryConfig } = useStaticQuery(
    graphql`
      query {
        catalystBeryConfig {
          useHeaderSocialLinks
          useColorMode
        }
      }
    `
  )
  return catalystBeryConfig
}
