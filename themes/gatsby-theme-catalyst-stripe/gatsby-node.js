const withDefaults = require(`./src/utils/default-options`)
const { GraphQLInt, GraphQLString } = require("gatsby/graphql")

// // Theme options validation
// exports.pluginOptionsSchema = ({ Joi }) => {
//   return Joi.object({
//     stripePublicKey: Joi.string()
//       .required()
//       .description(`Please include your Stripe Public Key`),
//     successUrl: Joi.string()
//       .required()
//       .description(`Url for successful transactions`),
//     cancelUrl: Joi.string()
//       .required()
//       .description(`Url for cancelled transactions`),
//     currency: Joi.string()
//       .required()
//       .description(`Currency for your store, e.g. USD`),
//     billingAddressCollection: Joi.string()
//       .required()
//       .description(`"auto" or "required"`),
//     allowedCountries: Joi.array()
//       .items(Joi.string())
//       .required()
//       .description(`An array of allowed countries, e.g. ["US", "CA"]`),
//   })
// }

// Create excerpts and create reading time for posts, based on gatsby-transformer-portable-text

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === "SanityProduct") {
    return {
      excerpt: {
        type: GraphQLString,
        args: {
          limit: {
            type: GraphQLInt,
            defaultValue: 140,
            description: `The max number of characters that should be displayed. The excerpt doesn't crop words. If all the characters of a word don't fit the limit then the word is not included.`,
          },
        },
      },
    }
  }
  // by default return empty object
  return {}
}

exports.createResolvers = ({ createResolvers }) => {
  const productResolvers = {
    SanityProduct: {
      excerpt: {
        resolve: (source, args = {}) => {
          const { limit } = args
          const text = source.description
          return text.length > limit
            ? text.substr(0, text.lastIndexOf(" ", limit)) + "..."
            : text
        },
      },
    },
  }

  const productCategoryResolvers = {
    SanityProductCategory: {
      products: {
        type: ["SanityProduct"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: "SanityProduct",
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
  createResolvers(productCategoryResolvers)
  createResolvers(productResolvers)
}

// Create Store Page
async function createStorePage(actions, reporter, themeOptions) {
  const { createPage } = actions
  const { sanityStorePath } = withDefaults(themeOptions)

  reporter.info(`Creating store page`)

  createPage({
    path: sanityStorePath,
    component: require.resolve("./src/components/queries/store-query.js"),
    context: {},
  })
}

// Create Products
async function createProductPages(graphql, actions, reporter, themeOptions) {
  const { createPage } = actions
  const { sanityProductPath } = withDefaults(themeOptions)
  const rootPath = sanityProductPath.replace(/\/*$/, `/`) //Ensure trailing slash

  const result = await graphql(`
    {
      allSanityProduct(
        filter: { slug: { current: { ne: null } }, active: { eq: true } }
      ) {
        nodes {
          id
          slug {
            current
          }
          categories {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const allProducts = result.data.allSanityProduct.nodes || []

  allProducts.forEach((post, index) => {
    const id = post.id
    const slug = post.slug.current.replace(/\/*$/, `/`) //Ensure trailing slash
    const categorySlug = post.categories[0].slug.current.replace(/\/*$/, `/`) //Ensure trailing slash
    const path = `${rootPath}${categorySlug}${slug}`
    reporter.info(`Creating product: ${path}`)
    createPage({
      path,
      component: require.resolve(
        "./src/components/queries/productPage-query.js"
      ),
      context: {
        id,
      },
    })
  })
}

// Create Product Category Pages

async function createProductCategoryPages(graphql, actions, themeOptions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  const { sanityProductPath } = withDefaults(themeOptions)
  const rootPath = sanityProductPath.replace(/\/*$/, `/`) //Ensure trailing slash
  // Query Gatsby‘s GraphAPI for all the categories that come from Sanity
  // You can query this API on http://localhost:8000/___graphql
  const result = await graphql(`
    {
      allSanityProductCategory {
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
  const categoryNodes = (result.data.allSanityProductCategory || {}).nodes || []

  categoryNodes
    // Loop through the category nodes, but don't return anything
    .forEach((node) => {
      // Desctructure the id and slug fields for each category
      const { id, slug = {} } = node
      // If there isn't a slug, we want to do nothing
      if (!slug) return

      // Make the URL with the current slug
      const path = `${rootPath}${slug.current}`

      // Create the page using the URL path and the template file, and pass down the id
      // that we can use to query for the right category in the template file
      createPage({
        path,
        component: require.resolve(
          "./src/components/queries/productCategory-query.js"
        ),
        context: { id },
      })
    })
}

// Conditionally create all the pages
exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const {
    sanityCreateStore,
    sanityCreateProductPages,
    sanityCreateProductCategoryPages,
  } = withDefaults(themeOptions)

  if (sanityCreateStore) {
    await createStorePage(actions, reporter, themeOptions)
  }
  if (sanityCreateProductPages) {
    await createProductPages(graphql, actions, reporter, themeOptions)
  }
  if (sanityCreateProductCategoryPages) {
    await createProductCategoryPages(graphql, actions, themeOptions)
  }
}

// const { createContentDigest } = require(`gatsby-core-utils`)

// // Theme Options Customizations
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   createTypes(`type CatalystStripeConfig implements Node {
//     stripePublicKey: String!
//     successUrl: String!
//     cancelUrl: String!
//     currency: String!
//     allowedCountries: [String!]
//     billingAddressCollection: Boolean!
//   }`)
// }

// exports.sourceNodes = (
//   { actions: { createNode }, schema },
//   {
//     stripePublicKey = "abc123",
//     successUrl = "https://useshoppingcart.com/",
//     cancelUrl = "https://useshoppingcart.com/",
//     currency = "USD",
//     allowedCountries = ["US", "CA"],
//     billingAddressCollection = true,
//   }
// ) => {
//   // create garden data from plugin config
//   const catalystStripeConfigFieldData = {
//     stripePublicKey,
//     successUrl,
//     cancelUrl,
//     currency,
//     allowedCountries,
//     billingAddressCollection,
//   }
//   createNode({
//     ...catalystStripeConfigFieldData,
//     id: `gatsby-theme-catalyst-stripe-config`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `CatalystStripeConfig`,
//       contentDigest: createContentDigest(catalystStripeConfigFieldData),
//       content: JSON.stringify(catalystStripeConfigFieldData),
//       description: `Catalyst Sanity Config`,
//     },
//   })
// }
