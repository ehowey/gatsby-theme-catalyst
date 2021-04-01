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
    id: `gatsby-theme-catalyst-bery-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystBeryConfig`,
      contentDigest: createContentDigest(catalystHeaderConfigFieldData),
      content: JSON.stringify(catalystHeaderConfigFieldData),
      description: `Catalyst Bery Config`,
    },
  })
}
