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
          sanityCreateProjects: themeOptions.sanityCreateProjects,
          sanityCreateProjectsList: themeOptions.sanityCreateProjectsList,
          pagePath: themeOptions.pagePath,
          sanityPostPath: themeOptions.sanityPostPath,
          sanityProjectPath: themeOptions.sanityProjectPath,
          sanityPostListTitle: themeOptions.sanityPostListTitle,
          sanityDisplayPostListTitle: themeOptions.sanityDisplayPostListTitle,
          sanityProjectListTitle: themeOptions.sanityProjectListTitle,
          sanityDisplayProjectListTitle:
            themeOptions.sanityDisplayProjectListTitle,
        },
      },
    ].filter(Boolean),
  }
}
