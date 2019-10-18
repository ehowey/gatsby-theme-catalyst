var crypto = require("crypto")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type CatalystConfig implements Node {
displaySiteLogo: Boolean!
displaySiteTitle: Boolean!
invertSiteLogo: Boolean!
mobileMenuBreakpoint: String!
navType: String!
headerPosition: String!
}`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    displaySiteLogo = true,
    displaySiteTitle = true,
    invertSiteLogo = false,
    mobileMenuBreakpoint = "768px",
    navType = "default",
    headerPosition = "static",
  }
) => {
  // create garden data from plugin config
  const catalystConfig = {
    displaySiteLogo,
    displaySiteTitle,
    invertSiteLogo,
    mobileMenuBreakpoint,
    navType,
    headerPosition,
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
