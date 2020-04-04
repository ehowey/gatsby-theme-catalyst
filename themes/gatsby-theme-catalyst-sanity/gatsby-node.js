const { createContentDigest } = require(`gatsby-core-utils`)
const withDefaults = require(`./src/utils/default-options`)

// Create Pages
async function createPages(graphql, actions, reporter) {
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

  allPages.forEach((page) => {
    const id = page.id
    const slug = page.slug.current.replace(/\/*$/, `/`) //Ensure trailing slash
    const path = `${slug}`

    reporter.info(`Creating page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/components/queries/page-query.js"),
      context: { id },
    })
  })
}

// Create Posts
async function createPosts(graphql, actions, reporter, themeOptions) {
  const { createPage } = actions
  const { sanityPostPath } = withDefaults(themeOptions)
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash

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

  allPosts.forEach((post) => {
    const id = post.id
    const slug = post.slug.current.replace(/\/*$/, `/`) //Ensure trailing slash
    const path = `${rootPath}${slug}`

    reporter.info(`Creating post: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/components/queries/post-query.js"),
      context: { id },
    })
  })
}

// Create Posts List Page
async function createPostsList(actions, reporter, themeOptions) {
  const { createPage } = actions
  const { sanityPostPath } = withDefaults(themeOptions)
  const rootPath = sanityPostPath.replace(/\/*$/, `/`) //Ensure trailing slash

  reporter.info(`Creating posts list page: ${rootPath}`)

  createPage({
    path: rootPath,
    component: require.resolve("./src/components/queries/post-list-query.js"),
    context: {},
  })
}

// Create Projects
async function createProjects(graphql, actions, reporter, themeOptions) {
  const { createPage } = actions
  const { sanityProjectPath } = withDefaults(themeOptions)
  const rootPath = sanityProjectPath.replace(/\/*$/, `/`) //Ensure trailing slash
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

  allProjects.forEach((project) => {
    const id = project.id
    const slug = project.slug.current.replace(/\/*$/, `/`) // Ensure trailing slash
    const path = `${rootPath}${slug}`

    reporter.info(`Creating project: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/components/queries/project-query.js"),
      context: { id },
    })
  })
}

// Create Projects List Page
async function createProjectsList(actions, reporter, themeOptions) {
  const { createPage } = actions
  const { sanityProjectPath } = withDefaults(themeOptions)
  const rootPath = sanityProjectPath.replace(/\/*$/, `/`) //Ensure trailing slash

  reporter.info(`Creating projects list page: ${rootPath}`)

  createPage({
    path: rootPath,
    component: require.resolve(
      "./src/components/queries/project-list-query.js"
    ),
    context: {},
  })
}

// Conditionally create all the pages
exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const {
    sanityCreatePages,
    sanityCreatePosts,
    sanityCreatePostsList,
    sanityCreateProjects,
    sanityCreateProjectsList,
  } = withDefaults(themeOptions)

  if (sanityCreatePages) {
    await createPages(graphql, actions, reporter)
  }
  if (sanityCreatePosts) {
    await createPosts(graphql, actions, reporter, themeOptions)
  }
  if (sanityCreatePostsList) {
    await createPostsList(actions, reporter, themeOptions)
  }
  if (sanityCreateProjects) {
    await createProjects(graphql, actions, reporter, themeOptions)
  }
  if (sanityCreateProjectsList) {
    await createProjectsList(actions, reporter, themeOptions)
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
    sanityCreatePages: Boolean!
    sanityCreatePosts: Boolean!
    sanityCreatePostsList: Boolean!
    sanityCreateProjects: Boolean!
    sanityCreateProjectsList: Boolean!
    sanityPostPath: String!
    sanityProjectPath: String!
    useSanityTheme: Boolean!
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
    sanityCreatePages = true,
    sanityCreatePosts = true,
    sanityCreatePostsList = true,
    sanityCreateProjects = true,
    sanityCreateProjectsList = true,
    sanityPostPath = "/posts",
    sanityProjectPath = "/projects",
    useSanityTheme = false,
  }
) => {
  // create garden data from plugin config
  const catalystSanityConfigFieldData = {
    sanityProjectId,
    sanityDataset,
    sanityToken,
    sanityWatchMode,
    sanityOverlayDrafts,
    sanityCreatePages,
    sanityCreatePosts,
    sanityCreatePostsList,
    sanityCreateProjects,
    sanityCreateProjectsList,
    sanityPostPath,
    sanityProjectPath,
    useSanityTheme,
  }
  createNode({
    ...catalystSanityConfigFieldData,
    id: `gatsby-theme-catalyst-sanity-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystSanityConfig`,
      contentDigest: createContentDigest(catalystSanityConfigFieldData),
      content: JSON.stringify(catalystSanityConfigFieldData),
      description: `Catalyst Sanity Config`,
    },
  })
}
