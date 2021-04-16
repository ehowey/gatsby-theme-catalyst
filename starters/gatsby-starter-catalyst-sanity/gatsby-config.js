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
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // remarkImagesWidth: 1440,
        // imageQuality: 50,
        // useAlertBanner: false,
      },
    },
    {
      resolve: `gatsby-theme-catalyst-header-top`,
      options: {
        // Default options are
        // useStickyHeader: true,
        // useHeaderSocialLinks: true,
        // useColorMode: true
      },
    },
    {
      resolve: `gatsby-theme-catalyst-footer`,
      options: {
        // Default options are
        // useFooterSocialLinks: true,
        // footerContentLocation: "left", // "left", "right", "center"
      },
    },
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
