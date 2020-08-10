const { createContentDigest } = require(`gatsby-core-utils`)
const withDefaults = require(`./src/utils/default-options`)
const {
  GraphQLInt,
  GraphQLString,
  TypeNameMetaFieldDef,
} = require("gatsby/graphql")
const memoize = require("lodash.memoize")

// Create categories

// Create excerpts and create reading time for posts, based on gatsby-transformer-portable-text

// Convert portable text to plain text
const toPlainText = memoize((blocks = []) =>
  blocks
    // loop through each block
    .map((block) => {
      // if it's not a text block with children,
      // return nothing
      if (block._type !== "block" || !block.children) {
        return ""
      }
      // loop through the children spans, and join the
      // text strings
      return block.children.map((child) => child.text).join("")
    })
    .join(" ")
    .replace(/\s\s+/g, " ")
)

// Reading time function calculation
function readingTime(text, wordsPerMinute = 200) {
  const noOfWords = text.split(/\s/g).length
  const minutes = noOfWords / wordsPerMinute

  return Math.ceil(minutes)
}

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === "SanityPost" || type.name === "SanityProject") {
    return {
      excerpt: {
        type: GraphQLString,
        args: {
          limit: {
            type: GraphQLInt,
            defaultValue: 100,
            description: `The max number of characters that should be displayed. The excerpt doesn't crop words. If all the characters of a word don't fit the limit then the word is not included.`,
          },
        },
      },
      readingTimeInMinutes: {
        type: GraphQLInt,
        args: {
          wordsPerMinute: {
            type: GraphQLInt,
            defaultValue: 200,
            description:
              "The number of words a person can read on average in a minute",
          },
        },
      },
    }
  }
  // by default return empty object
  return {}
}

exports.createResolvers = ({ createResolvers }) => {
  const postResolvers = {
    SanityPost: {
      readingTimeInMinutes: {
        resolve: (source, args = {}) => {
          const { wordsPerMinute } = args
          return readingTime(toPlainText(source.body), wordsPerMinute)
        },
      },
      excerpt: {
        resolve: (source, args = {}) => {
          const { limit } = args
          const text = toPlainText(source.body)

          return text.length > limit
            ? text.substr(0, text.lastIndexOf(" ", limit)) + "..."
            : text
        },
      },
    },
  }
  const projectResolvers = {
    SanityProject: {
      readingTimeInMinutes: {
        resolve: (source, args = {}) => {
          const { wordsPerMinute } = args
          return readingTime(toPlainText(source.body), wordsPerMinute)
        },
      },
      excerpt: {
        resolve: (source, args = {}) => {
          const { limit } = args
          const text = toPlainText(source.body)

          return text.length > limit
            ? text.substr(0, text.lastIndexOf(" ", limit)) + "..."
            : text
        },
      },
    },
  }
  const categoryResolvers = {
    SanityCategory: {
      posts: {
        type: ["SanityPost"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                categories: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          })
        },
      },
    },
  }
  createResolvers(categoryResolvers)
  createResolvers(postResolvers)
  createResolvers(projectResolvers)
}

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

  allPosts.forEach((post, index) => {
    const id = post.id
    const slug = post.slug.current.replace(/\/*$/, `/`) //Ensure trailing slash
    const path = `${rootPath}${slug}`
    const previous = index === post.length - 1 ? null : allPosts[index + 1]
    const next = index === 0 ? null : allPosts[index - 1]
    console.log(next)
    reporter.info(`Creating post: ${path}`)
    createPage({
      path,
      component: require.resolve("./src/components/queries/post-query.js"),
      context: {
        id,
        previousId: previous ? previous.id : undefined,
        nextId: next ? next.id : undefined,
      },
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

// Create Category Pages

async function createCategoryPages(graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    {
      allSanityCategory {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors

  // Let‘s gracefully handle if allSanityCatgogy is null
  const categoryNodes = (result.data.allSanityCategory || {}).nodes || []

  categoryNodes
    // Loop through the category nodes, but don't return anything
    .forEach((node) => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return

      // Make the URL with the current slug
      const path = `/categories/${slug.current}`

      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: require.resolve(
          "./src/components/queries/category-query.js"
        ),
        context: { id },
      })
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
    sanityCreateCategories,
  } = withDefaults(themeOptions)

  if (sanityCreatePages) {
    await createPages(graphql, actions, reporter)
  }
  if (sanityCreatePosts) {
    await createPosts(graphql, actions, reporter, themeOptions)
  }
  if (sanityCreateCategories) {
    await createCategoryPages(graphql, actions, reporter, themeOptions)
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
    sanityCreateCategories: Boolean!
    sanityPostPath: String!
    sanityProjectPath: String!
    useSanityTheme: Boolean!
    sanityPostListTitle: String!
    sanityDisplayPostListTitle: Boolean!
    sanityProjectListTitle: String!
    sanityDisplayProjectListTitle: Boolean!
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
    sanityCreateCategories = true,
    sanityPostPath = "/posts",
    sanityProjectPath = "/projects",
    useSanityTheme = false,
    sanityPostListTitle = "Posts",
    sanityDisplayPostListTitle = true,
    sanityProjectListTitle = "Projects",
    sanityDisplayProjectListTitle = true,
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
    sanityCreateCategories,
    sanityPostPath,
    sanityProjectPath,
    useSanityTheme,
    sanityPostListTitle,
    sanityDisplayPostListTitle,
    sanityProjectListTitle,
    sanityDisplayProjectListTitle,
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
