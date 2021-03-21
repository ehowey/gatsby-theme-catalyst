import { useStaticQuery, graphql } from "gatsby"
export const useBeryConfig = () => {
  const { catalystBeryConfig } = useStaticQuery(
    graphql`
      query {
        catalystBeryConfig {
          useSocialLinks
          useColorMode
        }
      }
    `
  )
  return catalystBeryConfig
}
