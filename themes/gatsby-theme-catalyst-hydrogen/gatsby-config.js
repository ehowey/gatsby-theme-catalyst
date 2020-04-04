module.exports = (themeOptions) => {
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
          sanityProjectId: themeOptions.sanityProjectId,
          sanityDataset: themeOptions.sanityDataset,
          sanityToken: themeOptions.sanityToken,
          sanityWatchMode: themeOptions.sanityWatchMode,
          sanityOverlayDrafts: themeOptions.sanityOverlayDrafts,
          sanityCreatePages: themeOptions.sanityCreatePages,
          sanityCreatePosts: themeOptions.sanityCreatePosts || false,
          sanityCreatePostsList: themeOptions.sanityCreatePostsList || false,
          sanityCreateProjects: themeOptions.sanityCreateProjects || false,
          sanityCreateProjectsList:
            themeOptions.sanityCreateProjectsList || false,
          pagePath: themeOptions.pagePath,
          sanityPostPath: themeOptions.sanityPostPath,
          sanityProjectPath: themeOptions.sanityProjectPath,
        },
      },
    ].filter(Boolean),
  }
}
