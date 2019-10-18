module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options: {
          // basePath defaults to `/`
          basePath: options.basePath || `/blog`,
          contentPath: options.contentPath || `src/blog/posts`,
          assetPath: options.assetPath || `src/blog/assets`,
          mdx: false,
        },
      },
    ],
  }
}
