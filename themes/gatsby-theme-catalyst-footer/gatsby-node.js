const { createContentDigest } = require(`gatsby-core-utils`)

// Schema generation
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  // Type definition for Catalyst Config
  const footerTypeDef = `
  type CatalystFooterConfig implements Node {
    useFooterSocialLinks: Boolean!
    footerContentLocation: String!
  }
  `
  createTypes(footerTypeDef)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  { useFooterSocialLinks = true, footerContentLocation = "left" }
) => {
  // create garden data from plugin config
  const catalystFooterConfigFieldData = {
    useFooterSocialLinks,
    footerContentLocation,
  }
  createNode({
    ...catalystFooterConfigFieldData,
    id: `gatsby-theme-catalyst-footer-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystFooterConfig`,
      contentDigest: createContentDigest(catalystFooterConfigFieldData),
      content: JSON.stringify(catalystFooterConfigFieldData),
      description: `Catalyst Footer Config`,
    },
  })
}
