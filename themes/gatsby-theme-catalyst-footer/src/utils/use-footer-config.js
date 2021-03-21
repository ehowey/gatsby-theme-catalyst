import { useStaticQuery, graphql } from "gatsby"
export const useFooterConfig = () => {
  const { catalystFooterConfig } = useStaticQuery(
    graphql`
      query {
        catalystFooterConfig {
          useSocialLinks
          footerContentLocation
        }
      }
    `
  )
  return catalystFooterConfig
}
