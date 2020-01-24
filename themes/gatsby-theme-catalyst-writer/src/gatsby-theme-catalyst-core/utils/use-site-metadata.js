import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SanityMetaData {
        logo: file(name: { eq: "catalyst-site-logo" }) {
          childImageSharp {
            fluid(maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        seoImage: file(name: { eq: "catalyst-site-social" }) {
          childImageSharp {
            resize(width: 1024) {
              src
              width
              height
            }
          }
        }
        allSanityMenuLink {
          nodes {
            link
            name
            type
          }
        }
        allSanitySocialLink {
          nodes {
            link
            location
            name
          }
        }
        sanitySiteSettings {
          author
          description
          siteUrl
          title
          twitter
          keywords
        }
      }
    `
  )

  const logo = data.logo.childImageSharp.fluid
  const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.sanitySiteSettings
  const socialLinks = data.allSanitySocialLink.nodes
  const menuLinks = data.allSanityMenuLink.nodes
  const allData = { ...metaData, menuLinks, socialLinks, logo, seoImage }
  return allData
}
