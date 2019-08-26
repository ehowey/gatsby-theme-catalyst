module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          defaultLayouts: {
            default: require.resolve(`./src/components/layout`),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1380,
                linkImagesToOriginal: false,
                withWebp: true,
              },
            },
            {
              resolve: `gatsby-remark-copy-linked-files`,
              options: {
                destinationDir: `assets/images`,
              },
            },
            { resolve: `gatsby-remark-smartypants` },
          ],
          plugins: [`gatsby-remark-images`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `src/`,
        },
      },
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-robots-txt`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-offline`,
    ],
  }
}
