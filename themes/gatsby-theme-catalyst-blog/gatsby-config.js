const withDefaults = require(`./src/utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)
  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/posts`,
          name: options.contentPath || `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
    ].filter(Boolean),
  }
}
