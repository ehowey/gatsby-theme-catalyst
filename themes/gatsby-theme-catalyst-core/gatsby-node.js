const { createContentDigest } = require(`gatsby-core-utils`)
const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const withDefaults = require(`./src/utils/default-options`)
const Debug = require(`debug`)
const debug = Debug(`gatsby-theme-blog-core`)

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { contentPath, assetPath } = withDefaults(themeOptions)

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ]

  dirs.forEach((dir) => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

//Schema generation for Catalyst Config and Submenu

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions
  // Create a default empty array
  createFieldExtension({
    name: `defaultSubMenu`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return []
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createFieldExtension({
    name: `defaultRightLocation`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return "right"
          }
          return source[info.fieldName]
        },
      }
    },
  })

  // Type defination for the submenu to ensure there is always a submenu array to query
  const subMenuTypeDefs = `
    type Site implements Node @infer {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      menuLinks: [MenuLinks]
    }
    type MenuLinks {
      name: String!
      link: String!
      type: String!
      location: String! @defaultRightLocation
      subMenu: [SubMenu] @defaultSubMenu
    }
    type SubMenu {
      name: String
      link: String
      type: String
    }
  `
  // Type definition for Catalyst Config
  const catalystConfigTypeDef = `
  type CatalystConfig implements Node {
    contentPath: String!
    assetPath: String!
    displaySiteLogo: Boolean!
    displaySiteTitle: Boolean!
    displaySiteLogoMobile: Boolean!
    displaySiteTitleMobile: Boolean!
    invertSiteLogo: Boolean!
    mobileMenuBreakpoint: String!
    useStickyHeader: Boolean!
    useSocialLinks: Boolean!
    useColorMode: Boolean!
    footerContentLocation: String!
    useKatex: Boolean!
  }
  `
  createTypes(subMenuTypeDefs)
  createTypes(catalystConfigTypeDef)
  // createTypes(`type CatalystConfig implements Node {
  //   contentPath: String!
  //   assetPath: String!
  //   displaySiteLogo: Boolean!
  //   displaySiteTitle: Boolean!
  //   displaySiteLogoMobile: Boolean!
  //   displaySiteTitleMobile: Boolean!
  //   invertSiteLogo: Boolean!
  //   mobileMenuBreakpoint: String!
  //   useStickyHeader: Boolean!
  //   useSocialLinks: Boolean!
  //   useColorMode: Boolean!
  //   footerContentLocation: String!
  //   useKatex: Boolean!
  // }`)
}

exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    contentPath = "content/pages",
    assetPath = "content/assets",
    displaySiteLogo = true,
    displaySiteTitle = true,
    displaySiteLogoMobile = true,
    displaySiteTitleMobile = true,
    invertSiteLogo = false,
    mobileMenuBreakpoint = "768px",
    useStickyHeader = false,
    useSocialLinks = true,
    useColorMode = true,
    footerContentLocation = "left",
    useKatex = false,
  }
) => {
  // create garden data from plugin config
  const catalystConfigFieldData = {
    contentPath,
    assetPath,
    displaySiteLogo,
    displaySiteTitle,
    displaySiteLogoMobile,
    displaySiteTitleMobile,
    invertSiteLogo,
    mobileMenuBreakpoint,
    useStickyHeader,
    useSocialLinks,
    useColorMode,
    footerContentLocation,
    useKatex,
  }
  createNode({
    ...catalystConfigFieldData,
    id: `gatsby-theme-catalyst-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystConfig`,
      contentDigest: createContentDigest(catalystConfigFieldData),
      content: JSON.stringify(catalystConfigFieldData),
      description: `Catalyst Config`,
    },
  })
}
