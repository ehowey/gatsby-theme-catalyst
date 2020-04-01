module.exports = (themeOptions) => {
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
        },
      },
    ],
  }
}
