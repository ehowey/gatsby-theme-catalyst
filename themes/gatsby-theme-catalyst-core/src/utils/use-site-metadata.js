import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            twitter
            siteUrl
            menuLinks {
              name
              link
              type
            }
            socialLinks {
              name
              link
              location
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
