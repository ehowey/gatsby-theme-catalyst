// Shadows the useSiteMetadata hook from gatsby-theme-catalyst-core to pull the data in from SANITY instead
import { useStaticQuery, graphql } from "gatsby"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { useSanityConfig } from "./use-sanity-config"

export const useSiteMetadata = () => {
  const { sanityConfig } = useSanityConfig()
  const data = useStaticQuery(
    graphql`
      query SanityMetaData {
        allSanitySiteSettings(
          limit: 1
          sort: { fields: _updatedAt, order: DESC }
        ) {
          nodes {
            author
            description
            siteUrl
            title
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
                id
              }
            }
          }
        }
        allSanityMenuLink(sort: { fields: order, order: ASC }) {
          nodes {
            link
            name
            location
            subMenu {
              link
              name
            }
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
  const siteMetadata = data.allSanitySiteSettings.nodes[0]
  const logo = getGatsbyImageData(
    siteMetadata.logo.asset.id,
    { maxWidth: 1080 },
    sanityConfig
  )
  const seoImageSrc = siteMetadata.seoImage.asset.url
  const seoImageHeight = siteMetadata.seoImage.asset.metadata.dimensions.height
  const seoImageWidth = siteMetadata.seoImage.asset.metadata.dimensions.width
  const seoImage = {
    src: seoImageSrc,
    width: seoImageWidth,
    height: seoImageHeight,
  }
  const metaData = siteMetadata
  const socialLinks = data.allSanitySocialLink.nodes
  const menuLinks = data.allSanityMenuLink.nodes
  const twitterLink = data.allSanitySocialLink.nodes
    .filter((social) => social.name.toLowerCase() === "twitter")
    .map((social) => {
      return social.link
    })
  const twitterUsername = twitterLink.length
    ? twitterLink[0]
        .toString()
        .toLowerCase()
        .replace("https://www.twitter.com/" && "https://twitter.com/", "@")
    : "Unknown"
  const allData = {
    ...metaData,
    menuLinks,
    socialLinks,
    logo,
    seoImage,
    twitterUsername,
  }
  return allData
}
