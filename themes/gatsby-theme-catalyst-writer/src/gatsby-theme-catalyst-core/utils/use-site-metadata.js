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
  const metaData = data.sanitySiteSettings
  const socialLinks = data.allSanitySocialLink.nodes
  const menuLinks = [
    {
      link: "/work",
      name: "Work",
      type: "internal",
    },
    {
      link: "/bio",
      name: "Bio",
      type: "internal",
    },
    {
      link: "/contact",
      name: "Contact",
      type: "internal",
    },
  ]
  const allData = { ...metaData, menuLinks, socialLinks, logo }
  return allData
}
