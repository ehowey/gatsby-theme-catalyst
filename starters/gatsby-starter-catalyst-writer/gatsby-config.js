require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Catalyst Writer`,
    description: `Speed up your GatsbyJS development workflow. Designed as a set of opinionated and advanced themes and starters using MDX and Theme-UI. A theme for freelance writers using SANITY.io for the CMS.`,
    keywords: [`writer`, `journalist`, `author`],
    author: `Eric Howey`,
    twitter: `@erchwy`,
    siteUrl: `https://gatsby-starter-catalyst-writer.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Work`,
        link: `/work`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Bio`,
        link: `/bio`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Contact`,
        link: `/contact`,
        type: `internal`, //internal or anchor
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
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
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // mobileMenuBreakpoint: `768px`,
        displaySiteLogo: false,
        useColorMode: false,
      },
    },
    `gatsby-theme-catalyst-header-basic`,
    `gatsby-theme-catalyst-footer-basic`,
    {
      resolve: `gatsby-theme-catalyst-writer`,
      options: {
        sanityProjectID: process.env.SANITY_PROJECT_ID,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
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
