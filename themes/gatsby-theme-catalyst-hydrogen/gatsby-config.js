module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
          contentPath: themeOptions.contentPath,
          assetPath: themeOptions.assetPath,
          useKatex: themeOptions.useKatex,
          remarkImagesWidth: themeOptions.remarkImagesWidth,
          imageQuality: themeOptions.imageQuality,
        },
      },
      {
        resolve: `gatsby-theme-catalyst-header-top`,
        options: {
          useStickyHeader: themeOptions.useStickyHeader,
          useHeaderSocialLinks: themeOptions.useHeaderSocialLinks,
          useColorMode: themeOptions.useColorMode,
        },
      },
      {
        resolve: `gatsby-theme-catalyst-footer`,
        options: {
          useFooterSocialLinks: themeOptions.useFooterSocialLinks,
          footerContentLocation: themeOptions.footerContentLocation, // "left", "right", "center"
        },
      },
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
