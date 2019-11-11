import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            menuLinks {
              name
              link
              type
            }
            socialLinks {
              name
              url
              location
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
