module.exports = {
  siteMetadata: {
    title: `Catalyst Blog`,
    description: `Speed up your Gatsby development workflow.`,
    keywords: [`gatsby`, `theme`, `react`, `blog`],
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-blog.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Blog`,
        link: `/posts`,
      },
      {
        name: `Page 1`,
        link: `/page-1`,
      },
      {
        name: `Anchor 1`,
        link: `/#anchor-1`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
          },
        ],
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
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertSiteLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // useKatex: false,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
        // imageQuality: 50,
        footerContentLocation: "right", // "left", "right", "center"
      },
    },
    {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        // Default options are:
        // basePath: `/posts`,
        // contentPath: `content/posts`,
        // assetPath: `content/assets`,
        // excerptLength: `140`,
        // rssTitle: `RSS Feed`,
      },
    },
    `gatsby-theme-catalyst-header-side`,
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
