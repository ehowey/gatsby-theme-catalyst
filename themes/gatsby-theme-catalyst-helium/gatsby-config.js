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
          footerContentLocation: "right", // "left", "right", "center"
          useStickyHeader: true,
        },
      },
      `gatsby-theme-catalyst-header-side`,
      `gatsby-theme-catalyst-footer`,
      {
        resolve: `gatsby-theme-catalyst-blog`,
        options: {
          basePath: themeOptions.basePath || "/",
          contentPath: themeOptions.contentPath,
          assetPath: themeOptions.assetPath,
          excerptLength: themeOptions.excerptLength,
          postListTitle: themeOptions.postListTitle || "Home",
          displayPostListTitle: themeOptions.displayPostListTitle || false,
        },
      },
    ].filter(Boolean),
  }
}
