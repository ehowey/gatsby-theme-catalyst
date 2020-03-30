module.exports = (options) => {
  return {
    plugins: [
      {
        resolve: `gatsby-source-sanity`,
        options: {
          projectId: options.sanityProjectId || "abc123",
          dataset: options.sanityDataset || "production",
          token: options.sanityToken || null,
          watchMode: options.sanityWatchMode || true,
          overlayDrafts: options.sanityOverlayDrafts || false,
        },
      },
    ],
  }
}
