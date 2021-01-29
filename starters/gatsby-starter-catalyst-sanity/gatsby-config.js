module.exports = {
  siteMetadata: {
    title: `Catalyst Sanity`,
    description: `Speed up your GatsbyJS development workflow. Designed as a set of opinionated and advanced themes and starters using MDX and Theme-UI. Incorporates gatsby-theme-catalyst-core, gatsby-theme-catalyst-header-top, and gatsby-theme-catalyst-footer.`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-sanity.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
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
        name: `Twitter`,
        link: `https://twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        // Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertSiteLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // useKatex: false, // Dark mode is not supported when configuring the theme from SANITY.io dashboard
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
        // imageQuality: 50,
      },
    },
    `gatsby-theme-catalyst-header-top`, // Try `gatsby-theme-catalyst-header-side`
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-theme-catalyst-sanity`,
      options: {
        // Example for an env variable
        // sanityProjectId: process.env.SANITY_PROJECT_ID,
        // sanityDataset: process.env.SANITY_DATASET,
        // sanityToken: process.env.SANITY_TOKEN,
        //
        // Default options are:
        // sanityProjectId: "abc123" // Required
        // sanityDataset: "production"
        // sanityToken: null
        // sanityWatchMode: true
        // sanityOverlayDrafts: false // Token is required for this
        // sanityCreatePages: true
        // sanityCreatePosts: true
        // sanityCreatePostsList: true
        // sanityCreateProjects: true
        // sanityCreateProjectsList: true
        // sanityPostPath: "/posts"
        // sanityProjectPath: "/projects"
        // sanityPostListTitle: "Posts"
        // sanityDisplayPostListTitle: true
        // sanityProjectListTitle: "Projects"
        // sanityDisplayProjectListTitle: true
        // useSanityTheme: false // Experimental right now
        sanityProjectId: "p9a6h8j1",
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
