var crypto = require("crypto")

// Create Pages
async function createSanityPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const allPages = result.data.allSanityPage.nodes || []

  allPages.forEach(page => {
    const id = page.id
    const slug = page.slug.current
    const path = `/${slug}/`

    reporter.info(`Creating page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/components/queries/page-query.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createSanityPages(graphql, actions, reporter)
}
// Theme Options Customizations
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type CatalystSanityConfig implements Node {
    sanityProjectId: String!
    sanityDataset: String!
    sanityToken: String
    sanityWatchMode: Boolean!
    sanityOverlayDrafts: Boolean!
  }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    sanityProjectId = "abc123",
    sanityDataset = "production",
    sanityToken = null,
    sanityWatchMode = true,
    sanityOverlayDrafts = false,
  }
) => {
  // create garden data from plugin config
  const catalystSanityConfig = {
    sanityProjectId,
    sanityDataset,
    sanityToken,
    sanityWatchMode,
    sanityOverlayDrafts,
  }
  createNode({
    ...catalystSanityConfig,
    id: `gatsby-theme-catalyst-sanity-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystSanityConfig`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(catalystSanityConfig))
        .digest(`hex`),
      content: JSON.stringify(catalystSanityConfig),
      description: `Catalyst Sanity Config`,
    },
  })
}
