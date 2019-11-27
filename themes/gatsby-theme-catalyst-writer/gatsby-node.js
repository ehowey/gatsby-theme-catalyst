var crypto = require("crypto")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type CatalystWriterConfig implements Node {
    sanityProjectID: String!
    sanityDataset: String!
  }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  { sanityProjectID = "abc123", sanityDataset = "production" }
) => {
  // create garden data from plugin config
  const catalystWriterConfig = {
    sanityProjectID,
    sanityDataset,
  }
  createNode({
    ...catalystWriterConfig,
    id: `gatsby-theme-catalyst-writer-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystWriterConfig`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(catalystWriterConfig))
        .digest(`hex`),
      content: JSON.stringify(catalystWriterConfig),
      description: `Catalyst Writer Config`,
    },
  })
}
