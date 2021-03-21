const { createContentDigest } = require(`gatsby-core-utils`)

// Schema generation
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  // Type definition for Catalyst Config
  const headerTypeDef = `
  type CatalystHeaderConfig implements Node {
    useStickyHeader: Boolean!
    useSocialLinks: Boolean!
    useColorMode: Boolean!
  }
  `
  createTypes(headerTypeDef)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  { useStickyHeader = false, useSocialLinks = true, useColorMode = true }
) => {
  // create garden data from plugin config
  const catalystHeaderConfigFieldData = {
    useStickyHeader,
    useSocialLinks,
    useColorMode,
  }
  createNode({
    ...catalystHeaderConfigFieldData,
    id: `gatsby-theme-catalyst-header-top-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystHeaderTopConfig`,
      contentDigest: createContentDigest(catalystHeaderConfigFieldData),
      content: JSON.stringify(catalystHeaderConfigFieldData),
      description: `Catalyst Header Top Config`,
    },
  })
}
