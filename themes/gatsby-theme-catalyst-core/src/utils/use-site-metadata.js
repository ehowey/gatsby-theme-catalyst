import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
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
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
            menuLinks {
              name
              link
              type
              location
              subMenu {
                link
                name
                type
              }
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
  const seoImage = data.seoImage.childImageSharp.resize
  const metaData = data.site.siteMetadata
  const twitterLink = data.site.siteMetadata.socialLinks
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

  const allData = { ...metaData, logo, seoImage, twitterUsername }
  return allData
}
