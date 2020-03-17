const withDefaults = require(`./src/utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  return {
    plugins: [
      {
        resolve: `gatsby-source-sanity`,
        options: {
          projectId: themeOptions.sanityProjectId || "abc123",
          dataset: themeOptions.sanityDataset || "production",
          token: themeOptions.sanityToken || null,
          watchMode: themeOptions.sanityWatchMode || true,
          overlayDrafts: themeOptions.sanityOverlayDrafts || false,
          useSanityPages: options.useSanityPages || false,
          useSanityPosts: options.useSanityPages || false,
          useSanityProjects: options.useSanityPages || false,
          pagePath: options.pagePath || "/",
          postPath: options.postPath || "/posts",
          projectPath: options.projectPath || "/projects",
        },
      },
    ],
  }
}
