module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
          //Default options are:
          // contentPath: `content/pages`,
          // assetPath: `content/assets`,
          // displaySiteLogo: true,
          // displaySiteTitle: true,
          // displaySiteLogoMobile: true,
          // displaySiteTitleMobile: true,
          // invertLogo: false,
          // useStickyHeader: false,
          // useSocialLinks: true,
          // useColorMode: true,
          //footerContentLocation: "left", // "left", "right", "center"
          displaySiteLogo: false,
          displaySiteLogoMobile: false,
          useColorMode: false,
        },
      },
      `gatsby-theme-catalyst-header-top`,
      `gatsby-theme-catalyst-footer`,
      {
        resolve: `gatsby-theme-catalyst-sanity`,
        options: {
          sanityProjectId: "mk3takg0",
          sanityDataset: "production",
          sanityToken: options.sanityToken,
          sanityWatchMode: options.sanityWatchMode,
          sanityOverlayDrafts: options.sanityOverlayDrafts,
          useSanityPages: options.useSanityPages || true,
          useSanityPosts: options.useSanityPages,
          useSanityProjects: options.useSanityPages,
          pagePath: options.pagePath,
          postPath: options.postPath,
          projectPath: options.projectPath,
        },
      },
    ],
  }
}
