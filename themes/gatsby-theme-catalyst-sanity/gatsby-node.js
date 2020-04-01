const { createContentDigest } = require(`gatsby-core-utils`)

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
  const postPath = themeOptions.postPath || "/posts"
  const rootPath = postPath.replace(/\/*$/, `/`) //Ensure trailing slash

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
  const postPath = themeOptions.postPath || "/posts"
  const rootPath = postPath.replace(/\/*$/, `/`) //Ensure trailing slash

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
  const projectPath = themeOptions.projectPath || "/projects"
  const rootPath = projectPath.replace(/\/*$/, `/`) //Ensure trailing slash
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
  const projectPath = themeOptions.projectPath || "/projects"
  const rootPath = projectPath.replace(/\/*$/, `/`) //Ensure trailing slash

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
  const createSanityPages =
    themeOptions.createSanityPages == null ||
    themeOptions.createSanityPages === true
  const createSanityPosts =
    themeOptions.createSanityPosts == null ||
    themeOptions.createSanityPosts === true
  const createSanityPostsList =
    themeOptions.createSanityPostsList == null ||
    themeOptions.createSanityPostsList === true
  const createSanityProjects =
    themeOptions.createSanityProjects == null ||
    themeOptions.createSanityProjects === true
  const createSanityProjectsList =
    themeOptions.createSanityProjectsList == null ||
    themeOptions.createSanityProjectsList === true
  if (createSanityPages) {
    await createPages(graphql, actions, reporter)
  }
  if (createSanityPosts) {
    await createPosts(graphql, actions, reporter, themeOptions)
  }
  if (createSanityPostsList) {
    await createPostsList(actions, reporter, themeOptions)
  }
  if (createSanityProjects) {
    await createProjects(graphql, actions, reporter, themeOptions)
  }
  if (createSanityProjectsList) {
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
    createSanityPages: Boolean!
    createSanityPosts: Boolean!
    createSanityPostsList: Boolean!
    createSanityProjects: Boolean!
    createSanityProjectsList: Boolean!
    postPath: String!
    projectPath: String!
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
    createSanityPages = true,
    createSanityPosts = true,
    createSanityPostsList = true,
    createSanityProjects = true,
    createSanityProjectsList = true,
    postPath = "/posts",
    projectPath = "/projects",
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
    createSanityPages,
    createSanityPosts,
    createSanityPostsList,
    createSanityProjects,
    createSanityProjectsList,
    postPath,
    projectPath,
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
