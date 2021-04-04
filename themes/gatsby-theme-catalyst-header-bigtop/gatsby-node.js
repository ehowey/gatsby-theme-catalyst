const { createContentDigest } = require(`gatsby-core-utils`)

// Schema generation
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  // Type definition for Catalyst Config
  const headerTypeDef = `
  type CatalystHeaderConfig implements Node {
    useHeaderSocialLinks: Boolean!
    useColorMode: Boolean!
  }
  `
  createTypes(headerTypeDef)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  { useHeaderSocialLinks = true, useColorMode = true }
) => {
  // create garden data from plugin config
  const catalystHeaderConfigFieldData = {
    useHeaderSocialLinks,
    useColorMode,
  }
  createNode({
    ...catalystHeaderConfigFieldData,
    id: `gatsby-theme-catalyst-header-bigtop-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystHeaderBigTopConfig`,
      contentDigest: createContentDigest(catalystHeaderConfigFieldData),
      content: JSON.stringify(catalystHeaderConfigFieldData),
      description: `Catalyst Header Big Top Config`,
    },
  })
}
