module.exports = {
  siteMetadata: {
    title: `Catalyst`,
    description: `Speed up your GatsbyJS development workflow. Designed as a set of opinionated and advanced themes and starters using MDX and Theme-UI. Incorporates gatsby-theme-catalyst-core, gatsby-theme-catalyst-header-top, and gatsby-theme-catalyst-footer.`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Left Link`,
        link: `/left-link/`,
        type: `internal`, //internal or anchor
        location: `left`,
      },
      {
        name: `Page 1`,
        link: `/page-1/`,
        type: `internal`, //internal or anchor
        location: `right`,
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`, //internal or anchor
        location: `right`,
      },
      {
        name: `Page 2`,
        link: `/page-2/`,
        type: `internal`, //internal or anchor
        location: `right`,
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1/`,
            type: `internal`, //internal or anchor
          },
          {
            name: `Sub 2`,
            link: `/sub-2/`,
            type: `internal`, //internal or anchor
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
      },
    },
    `gatsby-theme-catalyst-header-top`, // Try `gatsby-theme-catalyst-header-side`
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
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
