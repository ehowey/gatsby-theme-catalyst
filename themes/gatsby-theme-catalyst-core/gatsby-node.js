var crypto = require("crypto")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type CatalystConfig implements Node {
    contentPath: String!
    assetPath: String!
    displaySiteLogo: Boolean!
    displaySiteTitle: Boolean!
    useHero: Boolean!
    invertSiteLogo: Boolean!
    mobileMenuBreakpoint: String!
    useStickyHeader: Boolean!
  }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    contentPath = "content/pages",
    assetPath = "content/assets",
    displaySiteLogo = true,
    displaySiteTitle = true,
    useHero = false,
    invertSiteLogo = false,
    mobileMenuBreakpoint = "768px",
    useStickyHeader = false,
  }
) => {
  // create garden data from plugin config
  const catalystConfig = {
    contentPath,
    assetPath,
    displaySiteLogo,
    displaySiteTitle,
    useHero,
    invertSiteLogo,
    mobileMenuBreakpoint,
    useStickyHeader,
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
