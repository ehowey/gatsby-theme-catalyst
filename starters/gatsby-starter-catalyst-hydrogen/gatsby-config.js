require("dotenv").config()

module.exports = {
  siteMetadata: {
    // All other siteMetadata is sourced from SANITY.io
    siteUrl: `https://gatsby-starter-catalyst-writer.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-writer-sanity`,
      options: {
        // Example for an env variable
        // sanityProjectID: process.env.SANITY_PROJECT_ID,
        // sanityDataset: process.env.SANITY_DATASET
        //
        // Default values
        // sanityProjectId: REQUIRED,
        // sanityDataset: "production",
        // sanityToken: null,
        // sanityWatchMode: true,
        // sanityOverlayDrafts: false, // Requires a token and private dataset
        sanityProjectID: `utcr8kb1`, // Required
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
