var crypto = require("crypto")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type CatalystConfig implements Node {
    contentPath: String!
    assetPath: String!
    displaySiteLogo: Boolean!
    displaySiteTitle: Boolean!
    displaySiteLogoMobile: Boolean!
    displaySiteTitleMobile: Boolean!
    useHero: Boolean!
    invertSiteLogo: Boolean!
    mobileMenuBreakpoint: String!
    useStickyHeader: Boolean!
    useSocialLinks: Boolean!
    useColorMode: Boolean!
    isHeaderSideLeft: Boolean!
    footerContentLocation: String!
  }`)
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
    useHero = false,
    invertSiteLogo = false,
    mobileMenuBreakpoint = "768px",
    useStickyHeader = false,
    useSocialLinks = true,
    useColorMode = true,
    isHeaderSideLeft = true,
    footerContentLocation = "left",
  }
) => {
  // create garden data from plugin config
  const catalystConfig = {
    contentPath,
    assetPath,
    displaySiteLogo,
    displaySiteTitle,
    displaySiteLogoMobile,
    displaySiteTitleMobile,
    useHero,
    invertSiteLogo,
    mobileMenuBreakpoint,
    useStickyHeader,
    useSocialLinks,
    useColorMode,
    isHeaderSideLeft,
    footerContentLocation,
  }
  createNode({
    ...catalystConfig,
    id: `gatsby-theme-catalyst-config`,
    parent: null,
    children: [],
    internal: {
      type: `CatalystConfig`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(catalystConfig))
        .digest(`hex`),
      content: JSON.stringify(catalystConfig),
      description: `Catalyst Config`,
    },
  })
}

// exports.createSchemaCustomization = ({ actions, schema }) => {
//   const { createTypes } = actions
//   const typeDefs = [
//     "type Site implements Node { siteMetadata: SiteMetadata }",
//     schema.buildObjectType({
//       name: "SiteMetadata",
//       fields: {
//         menuLinks:
//       },
//     }),
//   ]
//   createTypes(typeDefs)
// }

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    "type Site implements Node { siteMetadata: SiteMetadata }",
    schema.buildObjectType({
      name: "SiteMetadata",
      fields: {
        menuLinks: "[JSON]",
      },
    }),
    "type SiteMetadata implements Node { menuLinks: MenuLinks }",
    schema.buildObjectType({
      name: "MenuLinks",
      fields: {
        subMenu: {
          type: "[JSON]",
          resolve(source, args, context, info) {
            // For a more generic solution, you could pick the field value from
            // `source[info.fieldName]`
            const { subMenu } = source
            if (
              source.subMenu == null ||
              (Array.isArray(subMenu) && !subMenu.length)
            ) {
              return []
            }
            return subMenu
          },
        },
      },
    }),
    "type MenuLinks implements Node { subMenu: SubMenu }",
    schema.buildObjectType({
      name: "SubMenu",
      fields: {
        name: "String",
        link: "String",
        type: "String",
      },
    }),
  ]
  createTypes(typeDefs)
}
