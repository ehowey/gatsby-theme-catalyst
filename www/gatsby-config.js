module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Catalyst`,
    description: `Accelerate your GatsbyJS development workflow. Designed as an opinionated set of integrated themes and starters that can be used as a boilerplate for your next Gatsby project. Uses Theme-UI and MDX under the hood.`,
    keywords: [
      `gatsby`,
      `gatsbyjs`,
      `theme-ui`,
      `sanity`,
      `sanity.io`,
      `catalyst`,
      `gatsby theme catalyst`,
      `gatsby-theme-catalyst`,
      `theme`,
      `react`,
      `gatsby theme`,
      `gatsby starter`,
    ],
    author: `Eric Howey`,
    siteUrl: `https://www.gatsbycatalyst.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Getting Started`,
        link: `/getting-started`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Tutorials`,
        link: `/tutorials`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Docs`,
        link: `/docs`,
        type: `internal`, //internal or anchor
      },
    ],
    socialLinks: [
      {
        name: `Github`,
        link: `https://www.github.com/ehowey/gatsby-theme-catalyst`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        displaySiteTitleMobile: false,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        footerContentLocation: "right", // "left", "right", "center"
      },
    },
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
