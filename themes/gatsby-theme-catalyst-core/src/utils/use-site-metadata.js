import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        logo: file(name: { eq: "catalyst-logo" }) {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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

  const logo = data.logo.childImageSharp.fluid
  const metaData = data.site.siteMetadata
  const allData = { ...metaData, logo }
  return allData
}
