const { createContentDigest } = require(`gatsby-core-utils`)

//Schema generation for Helium Config

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type HeliumConfig implements Node {
    useHero: Boolean!
  }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  { useHero = false }
) => {
  // create garden data from plugin config
  const heliumConfigFieldData = {
    useHero,
  }
  createNode({
    ...heliumConfigFieldData,
    id: `gatsby-theme-catalyst-helium-config`,
    parent: null,
    children: [],
    internal: {
      type: `HeliumConfig`,
      contentDigest: createContentDigest(heliumConfigFieldData),
      content: JSON.stringify(heliumConfigFieldData),
      description: `Helum Config`,
    },
  })
}
