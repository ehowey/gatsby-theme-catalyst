const remarkSlug = require("remark-slug")
const withDefaults = require(`./src/utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)
  const remarkImagesWidth =
    themeOptions.remarkImagesWidth == null
      ? 1440
      : parseInt(themeOptions.remarkImagesWidth)
  const imageQuality =
    themeOptions.imageQuality == null ? 50 : parseInt(themeOptions.imageQuality)
  const gatsbyRemarkPlugins = [
    {
      resolve: `gatsby-remark-relative-images`,
      options: {},
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: remarkImagesWidth,
        linkImagesToOriginal: false,
        withWebp: true,
        backgroundColor: `transparent`,
        quality: imageQuality,
      },
    },
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {
        destinationDir: themeOptions.assetPath || `content/assets`,
      },
    },

    { resolve: `gatsby-remark-smartypants` },
    { resolve: `gatsby-remark-reading-time` },
    { resolve: `gatsby-remark-responsive-iframe` },
    { resolve: `gatsby-remark-external-links` },
  ]
  const remarkPlugins = [remarkSlug]
  const rehypePlugins = []

  return {
    siteMetadata: {
      title: `Placeholder title`,
      description: `Placeholder description`,
      keywords: [`gatsby`],
      author: `Placeholder author`,
      siteUrl: `https://www.gatsbyjs.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
      menuLinks: [
        {
          name: `Placeholder Menu Link`,
          link: `/`,
          type: `internal`, //internal or anchor
        },
      ],
      socialLinks: [
        {
          name: `Placeholder social link`,
          link: `https://www.gatsbyjs.com`,
          location: `all`, //Options are "all", "header", "footer"
        },
      ],
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: options.contentPath || `content/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: options.assetPath || `content/assets`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: options.contentPath || `content/pages`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          defaultLayouts: {
            default: require.resolve("./src/components/layout.js"),
          },
          gatsbyRemarkPlugins: gatsbyRemarkPlugins,
          remarkPlugins: remarkPlugins,
          rehypePlugins: rehypePlugins,
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: remarkImagesWidth,
                linkImagesToOriginal: false,
                withWebp: true,
                backgroundColor: `transparent`,
                quality: imageQuality,
              },
            },
          ],
        },
      },
      `gatsby-plugin-mdx-embed`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-robots-txt`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-yaml`,
      `gatsby-transformer-json`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaultQuality: imageQuality,
        },
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-image`,
    ].filter(Boolean),
  }
}
