import { useStaticQuery, graphql } from "gatsby"
export const useFooterConfig = () => {
  const { catalystFooterConfig } = useStaticQuery(
    graphql`
      query {
        catalystFooterConfig {
          useFooterSocialLinks
          footerContentLocation
        }
      }
    `
  )
  return catalystFooterConfig
}
