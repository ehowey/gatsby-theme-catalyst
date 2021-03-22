const { createContentDigest } = require(`gatsby-core-utils`)

// Schema generation
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  // Type definition for Catalyst Config
  const headerTypeDef = `
  type CatalystHeaderConfig implements Node {
    useStickyHeader: Boolean!
    useHeaderSocialLinks: Boolean!
    useColorMode: Boolean!
  }
  `
  createTypes(headerTypeDef)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  { useStickyHeader = false, useHeaderSocialLinks = true, useColorMode = true }
) => {
  // create garden data from plugin config
  const catalystHeaderConfigFieldData = {
    useStickyHeader,
    useHeaderSocialLinks,
    useColorMode,
  }
  createNode({
    ...catalystHeaderConfigFieldData,
    id: `gatsby-theme-catalyst-header-side-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystHeaderSideConfig`,
      contentDigest: createContentDigest(catalystHeaderConfigFieldData),
      content: JSON.stringify(catalystHeaderConfigFieldData),
      description: `Catalyst Header Side Config`,
    },
  })
}
