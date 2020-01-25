import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SanityMetaData {
        sanitySiteSettings {
          author
          description
          siteUrl
          title
          twitter
          keywords
          seoImage {
            asset {
              url
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
          logo {
            asset {
              fluid(maxWidth: 512) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        allSanityMenuLink(sort: { fields: order, order: ASC }) {
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
      }
    `
  )

  const logo = data.sanitySiteSettings.logo.asset.fluid
  const seoImageSrc = data.sanitySiteSettings.seoImage.asset.url
  const seoImageHeight =
    data.sanitySiteSettings.seoImage.asset.metadata.dimensions.height
  const seoImageWidth =
    data.sanitySiteSettings.seoImage.asset.metadata.dimensions.width
  const seoImage = {
    src: seoImageSrc,
    width: seoImageWidth,
    height: seoImageHeight,
  }
  const metaData = data.sanitySiteSettings
  const socialLinks = data.allSanitySocialLink.nodes
  const menuLinks = data.allSanityMenuLink.nodes
  const allData = { ...metaData, menuLinks, socialLinks, logo, seoImage }
  return allData
}
