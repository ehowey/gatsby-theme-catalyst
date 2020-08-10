module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
          contentPath: themeOptions.contentPath,
          assetPath: themeOptions.assetPath,
          displaySiteLogo: themeOptions.displaySiteLogo,
          displaySiteTitle: themeOptions.displaySiteTitle,
          displaySiteLogoMobile: themeOptions.displaySiteLogoMobile,
          displaySiteTitleMobile: themeOptions.displaySiteTitleMobile,
          invertLogo: themeOptions.invertLogo,
          useStickyHeader: themeOptions.useStickyHeader,
          useSocialLinks: themeOptions.useSocialLinks,
          useColorMode: themeOptions.useColorMode,
          useKatex: themeOptions.useKatex,
          footerContentLocation: themeOptions.footerContentLocation || "center", // "left", "right", "center"
        },
      },
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
          sanityCreatePosts: themeOptions.sanityCreatePosts,
          sanityCreatePostsList: themeOptions.sanityCreatePostsList,
          sanityCreateCategories: themeOptions.sanityCreateCategories,
          sanityCreateProjects: themeOptions.sanityCreateProjects || false,
          sanityCreateProjectsList:
            themeOptions.sanityCreateProjectsList || false,
          sanityPostPath: themeOptions.sanityPostPath || "/posts",
          sanityPostListPath: themeOptions.sanityPostListPath || "/",
          sanityProjectPath: themeOptions.sanityProjectPath,
          sanityProjectListPath: themeOptions.sanityProjectListPath,
          sanityPostListTitle: themeOptions.sanityPostListTitle || "Blog",
          sanityDisplayPostListTitle: themeOptions.sanityDisplayPostListTitle,
          sanityProjectListTitle: themeOptions.sanityProjectListTitle,
          sanityDisplayProjectListTitle:
            themeOptions.sanityDisplayProjectListTitle,
        },
      },
    ].filter(Boolean),
  }
}
