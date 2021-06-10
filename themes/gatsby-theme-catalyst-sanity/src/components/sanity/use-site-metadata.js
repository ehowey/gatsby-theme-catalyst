// Shadows the useSiteMetadata hook from gatsby-theme-catalyst-core to pull the data in from SANITY instead
import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
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
                gatsbyImageData(
                  height: 300
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        allSanityMainNav(limit: 1, sort: { fields: _updatedAt, order: DESC }) {
          nodes {
            mainNavLeft {
              name
              link
              subMenu {
                link
                name
              }
            }
            mainNavRight {
              name
              link
              subMenu {
                link
                name
              }
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
  const logo = siteMetadata.logo.asset.gatsbyImageData
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

  const menuLinksLeft = data.allSanityMainNav.nodes[0].mainNavLeft.map(
    (menuLink) => ({
      name: menuLink.name,
      link: menuLink.link,
      location: "left",
      subMenu: menuLink.subMenu,
    })
  )
  const menuLinksRight = data.allSanityMainNav.nodes[0].mainNavRight.map(
    (menuLink) => ({
      name: menuLink.name,
      link: menuLink.link,
      location: "right",
      subMenu: menuLink.subMenu,
    })
  )
  const menuLinks = [...menuLinksLeft, ...menuLinksRight]
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
