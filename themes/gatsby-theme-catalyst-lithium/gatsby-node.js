const { createContentDigest } = require(`gatsby-core-utils`)

//Schema generation for Lithium Config

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type LithiumConfig implements Node {
    useHero: Boolean!
  }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  { useHero = false }
) => {
  // create garden data from plugin config
  const lithiumConfigFieldData = {
    useHero,
  }
  createNode({
    ...lithiumConfigFieldData,
    id: `gatsby-theme-catalyst-lithium-config`,
    parent: null,
    children: [],
    internal: {
      type: `LithiumConfig`,
      contentDigest: createContentDigest(lithiumConfigFieldData),
      content: JSON.stringify(lithiumConfigFieldData),
      description: `Lithium Config`,
    },
  })
}
