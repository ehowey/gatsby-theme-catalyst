var crypto = require("crypto")

//Schema generation for Catalust Config

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type CatalystConfig implements Node {
    contentPath: String!
    assetPath: String!
    displaySiteLogo: Boolean!
    displaySiteTitle: Boolean!
    displaySiteLogoMobile: Boolean!
    displaySiteTitleMobile: Boolean!
    invertSiteLogo: Boolean!
    mobileMenuBreakpoint: String!
    useStickyHeader: Boolean!
    useSocialLinks: Boolean!
    useColorMode: Boolean!
    footerContentLocation: String!
  }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    contentPath = "content/pages",
    assetPath = "content/assets",
    displaySiteLogo = true,
    displaySiteTitle = true,
    displaySiteLogoMobile = true,
    displaySiteTitleMobile = true,
    invertSiteLogo = false,
    mobileMenuBreakpoint = "768px",
    useStickyHeader = false,
    useSocialLinks = true,
    useColorMode = true,
    footerContentLocation = "left",
  }
) => {
  // create garden data from plugin config
  const catalystConfig = {
    contentPath,
    assetPath,
    displaySiteLogo,
    displaySiteTitle,
    displaySiteLogoMobile,
    displaySiteTitleMobile,
    invertSiteLogo,
    mobileMenuBreakpoint,
    useStickyHeader,
    useSocialLinks,
    useColorMode,
    footerContentLocation,
  }
  createNode({
    ...catalystConfig,
    id: `gatsby-theme-catalyst-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystConfig`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(catalystConfig))
        .digest(`hex`),
      content: JSON.stringify(catalystConfig),
      description: `Catalyst Config`,
    },
  })
}
