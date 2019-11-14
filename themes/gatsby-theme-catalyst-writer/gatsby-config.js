module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        useHero: true,
        displaySiteLogo: false
      }
    },
    `gatsby-theme-catalyst-header-basic`,
    `gatsby-theme-catalyst-footer-basic`
  ]
};
