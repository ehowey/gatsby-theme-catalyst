module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
          contentPath: themeOptions.contentPath,
          assetPath: themeOptions.assetPath,
          displaySiteLogo: themeOptions.displaySiteLogo || false,
          displaySiteTitle: themeOptions.displaySiteTitle,
          displaySiteLogoMobile: themeOptions.displaySiteLogoMobile || false,
          displaySiteTitleMobile: themeOptions.displaySiteTitleMobile,
          invertLogo: themeOptions.invertLogo,
          useStickyHeader: themeOptions.useStickyHeader,
          useSocialLinks: themeOptions.useSocialLinks,
          useColorMode: themeOptions.useColorMode || false,
          useKatex: themeOptions.useKatex,
          footerContentLocation: themeOptions.footerContentLocation, // "left", "right", "center"
        },
      },
      `gatsby-theme-catalyst-header-bigtop`,
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
          sanityCreateCategories: themeOptions.sanityCreateCategories || false,
          sanityPostPath: themeOptions.sanityPostPath,
          sanityPostListPath: themeOptions.sanityPostListPath,
          sanityProjectPath: themeOptions.sanityProjectPath,
          sanityProjectListPath: themeOptions.sanityProjectListPath,
        },
      },
    ].filter(Boolean),
  }
}
