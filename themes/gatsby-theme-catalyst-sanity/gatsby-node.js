var crypto = require("crypto")

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
async function createPosts(graphql, actions, reporter, options) {
  const { createPage } = actions
  const postPath = options.postPath || "/posts"
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
async function createPostsList(actions, reporter, options) {
  const { createPage } = actions
  const postPath = options.postPath || "/posts"
  const rootPath = postPath.replace(/\/*$/, `/`) //Ensure trailing slash

  reporter.info(`Creating posts list page: ${rootPath}`)

  createPage({
    path: rootPath,
    component: require.resolve("./src/components/queries/post-list-query.js"),
    context: {},
  })
}

// Create Projects
async function createProjects(graphql, actions, reporter, options) {
  const { createPage } = actions
  const projectPath = options.projectPath || "/projects"
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
async function createProjectsList(actions, reporter, options) {
  const { createPage } = actions
  const projectPath = options.projectPath || "/projects"
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
exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const createSanityPages =
    options.createSanityPages == null || options.createSanityPages === true
  const createSanityPosts =
    options.createSanityPosts == null || options.createSanityPosts === true
  const createSanityPostsList =
    options.createSanityPostsList == null ||
    options.createSanityPostsList === true
  const createSanityProjects =
    options.createSanityProjects == null ||
    options.createSanityProjects === true
  const createSanityProjectsList =
    options.createSanityProjectsList == null ||
    options.createSanityProjectsList === true
  if (createSanityPages) {
    await createPages(graphql, actions, reporter)
  }
  if (createSanityPosts) {
    await createPosts(graphql, actions, reporter, options)
  }
  if (createSanityPostsList) {
    await createPostsList(actions, reporter, options)
  }
  if (createSanityProjects) {
    await createProjects(graphql, actions, reporter, options)
  }
  if (createSanityProjectsList) {
    await createProjectsList(actions, reporter, options)
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
  }
) => {
  // create garden data from plugin config
  const catalystSanityConfig = {
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
