const remarkSlug = require("remark-slug")

module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `src/images`,
        },
      },
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
          remarkPlugins: [remarkSlug],
          plugins: [`gatsby-remark-images`],
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
