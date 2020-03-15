var crypto = require("crypto")
const withDefaults = require(`./src/utils/default-options`)

// Create Pages
async function createSanityPages(graphql, actions, reporter, themeOptions) {
  const { createPage } = actions
  const { pagePath } = withDefaults(themeOptions)
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
    const path = `${pagePath}${slug}/`

    reporter.info(`Creating page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/components/queries/page-query.js"),
      context: { id },
    })
  })
}

// Create Posts
async function createSanityPosts(graphql, actions, reporter, themeOptions) {
  const { createPage } = actions
  const { postPath } = withDefaults(themeOptions)
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
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

  const allPosts = result.data.allSanityPost.nodes || []

  allPosts.forEach(post => {
    const id = post.id
    const slug = post.slug.current
    const path = `${postPath}${slug}/`

    reporter.info(`Creating post: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/components/queries/post-query.js"),
      context: { id },
    })
  })
}

// Create Posts Index Page
async function createSanityPostsIndex(actions, reporter, themeOptions) {
  const { createPage } = actions
  const { postPath } = withDefaults(themeOptions)

  reporter.info(`Creating posts index page: ${postPath}`)

  createPage({
    path: postPath,
    component: require.resolve("./src/components/queries/posts-query.js"),
    context: {},
  })
}

// Create Projects
async function createSanityProjects(graphql, actions, reporter, themeOptions) {
  const { createPage } = actions
  const { projectPath } = withDefaults(themeOptions)
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
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

  const allProjects = result.data.allSanityProject.nodes || []

  allProjects.forEach(project => {
    const id = project.id
    const slug = project.slug.current
    const path = `${projectPath}${slug}/`

    reporter.info(`Creating project: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/components/queries/project-query.js"),
      context: { id },
    })
  })
}

// Conditionally create all the pages
exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { useSanityPages, useSanityPosts, useSanityProjects } = withDefaults(
    themeOptions
  )
  if (useSanityPages) {
    await createSanityPages(graphql, actions, reporter, themeOptions)
  }
  if (useSanityPosts) {
    await createSanityPosts(graphql, actions, reporter, themeOptions)
    await createSanityPostsIndex(actions, reporter, themeOptions)
  }
  if (useSanityProjects) {
    await createSanityProjects(graphql, actions, reporter, themeOptions)
  }
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
    useSanityPages: Boolean!
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
    useSanityPages = false,
  }
) => {
  // create garden data from plugin config
  const catalystSanityConfig = {
    sanityProjectId,
    sanityDataset,
    sanityToken,
    sanityWatchMode,
    sanityOverlayDrafts,
    useSanityPages,
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
