module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
          useHero: true,
          displaySiteLogo: options.displaySiteLogo || false,
          displaySiteTitle: options.displaySiteTitle || true
        }
      }
    ]
  };
};
