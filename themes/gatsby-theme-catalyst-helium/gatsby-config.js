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
          footerContentLocation: themeOptions.footerContentLocation, // "left", "right", "center"
        },
      },
      `gatsby-theme-catalyst-header-bigtop`,
      `gatsby-theme-catalyst-footer`,
      {
        resolve: `gatsby-theme-catalyst-blog`,
        options: {
          basePath: themeOptions.basePath || "/",
          contentPath: themeOptions.blogContentPath,
          assetPath: themeOptions.blogAssetPath,
          excerptLength: themeOptions.excerptLength,
          postListTitle: themeOptions.postListTitle || "Writing",
          displayPostListTitle: themeOptions.displayPostListTitle || true,
        },
      },
    ].filter(Boolean),
  }
}
