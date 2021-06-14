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
        allSanitySocialLinks(
          limit: 1
          sort: { fields: _updatedAt, order: DESC }
        ) {
          nodes {
            footerSocialLinks {
              link
              name
            }
            headerSocialLinks {
              link
              name
            }
          }
        }
      }
    `
  )
  // //Mock data
  // const mockData = {
  //   allSanitySocialLinks: {
  //     nodes: [],
  //   },
  // }
  // Site metadata
  const siteMetadata = data.allSanitySiteSettings.nodes[0]
  // Logo
  const logo = siteMetadata.logo.asset.gatsbyImageData
  // Default Social/Seo Image
  const seoImageSrc = siteMetadata.seoImage.asset.url
  const seoImageHeight = siteMetadata.seoImage.asset.metadata.dimensions.height
  const seoImageWidth = siteMetadata.seoImage.asset.metadata.dimensions.width
  const seoImage = {
    src: seoImageSrc,
    width: seoImageWidth,
    height: seoImageHeight,
  }
  // Build the social links array
  // Check that there are social links so build doesn't fail
  const hasHeaderSocialLinks =
    data.allSanitySocialLinks.nodes.length > 0 &&
    data.allSanitySocialLinks.nodes[0].headerSocialLinks.length > 0

  const hasFooterSocialLinks =
    data.allSanitySocialLinks.nodes.length > 0 &&
    data.allSanitySocialLinks.nodes[0].footerSocialLinks.length > 0

  // Rebuild the object formats
  const headerSocialLinks = hasHeaderSocialLinks
    ? data.allSanitySocialLinks.nodes[0].headerSocialLinks.map(
        (socialLink) => ({
          name: socialLink.name,
          link: socialLink.link,
          location: "header",
        })
      )
    : []

  const footerSocialLinks = hasFooterSocialLinks
    ? data.allSanitySocialLinks.nodes[0].footerSocialLinks.map(
        (socialLink) => ({
          name: socialLink.name,
          link: socialLink.link,
          location: "footer",
        })
      )
    : []

  // Merge into one socialLinks array
  const socialLinks = [...headerSocialLinks, ...footerSocialLinks]

  // Pull out the Twitter username if it exists
  const twitterInfo = socialLinks.filter(
    (social) => social.name.toLowerCase() === "twitter"
  )

  const hasTwitterInfo = twitterInfo.length > 0

  const twitterUsername = hasTwitterInfo
    ? twitterInfo
        .map((social) => {
          const userName =
            social.link !== ""
              ? social.link
                  .toLowerCase()
                  .replace(
                    "https://www.twitter.com/" && "https://twitter.com/",
                    "@"
                  )
              : "Unknown"
          return userName
        })
        .shift()
        .toString()
    : "Unknown"

  // Build the menuLinks array from SANITY data
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

  return {
    ...siteMetadata,
    menuLinks,
    socialLinks,
    logo,
    seoImage,
    twitterUsername,
  }
}
