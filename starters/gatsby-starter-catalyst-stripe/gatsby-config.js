require("dotenv").config()
const stripeConfig = require("./stripe-config")

module.exports = {
  siteMetadata: {
    title: `Placeholder title`, // Sourced from SANITY
    description: `Placeholder description`, // Sourced from SANITY
    keywords: [`keyword 1`, `keyword 2`, `keyword 3`], // Sourced from SANITY
    author: `Placeholder author`, // Sourced from SANITY
    siteUrl: `https://gatsby-starter-catalyst-stripe.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      // Sourced from SANITY
      {
        name: `Page 1`,
        link: `/page-1`,
      },
    ],
    socialLinks: [
      // Sourced from SANITY
      {
        name: `Placeholder`,
        link: `eric@erichowey.dev`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-stripe`,
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
        sanityProjectId: process.env.GATSBY_SANITY_PROJECT_ID, // Required
        sanityDataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
        sanityToken: process.env.GATSBY_SANITY_TOKEN,
        stripePublicKey: stripeConfig.stripePublicKey,
        allowedCountries: stripeConfig.allowedCountries,
        billingAddressCollection: stripeConfig.billingAddressCollection,
        currency: stripeConfig.currency,
        successUrl: stripeConfig.successUrl,
        cancelUrl: stripeConfig.cancelUrl,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-hydrogen`,
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
