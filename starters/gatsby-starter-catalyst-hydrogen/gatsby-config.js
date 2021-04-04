require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Placeholder title`, // Sourced from SANITY
    description: `Placeholder description`, // Sourced from SANITY
    keywords: [`keyword 1`, `keyword 2`, `keyword 3`], // Sourced from SANITY
    author: `Placeholder author`, // Sourced from SANITY
    siteUrl: `https://gatsby-starter-catalyst-hydrogen.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
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
      resolve: `gatsby-theme-catalyst-hydrogen`,
      options: {
        // Example for an env variable
        // sanityProjectID: process.env.SANITY_PROJECT_ID,
        // sanityDataset: process.env.SANITY_DATASET
        //
        // Default options are:
        // Sanity Theme
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
        // Core Theme
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // useKatex: false,
        // remarkImagesWidth: 1440,
        // imageQuality: 50,
        // useAlertBanner: false,
        // Footer Theme
        // useFooterSocialLinks: true,
        // footerContentLocation: "left", // "left", "right", "center"
        // Header Theme
        // useStickyHeader: false,
        // useHeaderSocialLinks: true,
        // useColorMode: true
        sanityProjectId: `pyvaull7`, // Required
        useColorMode: false,
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
