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
        link: `/docs/getting-started`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Starters`,
        link: `/docs/starters`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Accessibility`,
        link: `/docs/accessibility`,
        type: `internal`, //internal or anchor
      },
      {
        name: `SEO`,
        link: `/docs/seo`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Configuring Themes`,
        link: `/docs/configuring-themes`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `Theme Options`,
            link: `docs/theme-options`,
            type: `internal`,
          },
          {
            name: `Gatsby-Config.js`,
            link: `docs/variants`,
            type: `internal`,
          },
          {
            name: `Theme-UI`,
            link: `docs/theme-ui`,
            type: `internal`,
          },
          {
            name: `Component Shadowing`,
            link: `docs/component-shadowing`,
            type: `internal`,
          },
        ],
      },
      {
        name: `Layout Themes`,
        link: `/docs/layout-themes`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `gatsby-theme-catalyst-core`,
            link: `docs/gatsby-theme-catalyst-core`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-header-top`,
            link: `docs/gatsby-theme-catalyst-header-top`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-header-side`,
            link: `docs/gatsby-theme-catalyst-header-side`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-footer`,
            link: `docs/gatsby-theme-catalyst-footer`,
            type: `internal`,
          },
        ],
      },
      {
        name: `Data Themes`,
        link: `/docs/data-themes`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `gatsby-theme-catalyst-sanity`,
            link: `docs/gatsby-theme-catalyst-sanity`,
            type: `internal`,
          },
        ],
      },
      {
        name: `Presentation Themes`,
        link: `/docs/presentation-themes`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `gatsby-theme-catalyst-hydrogen`,
            link: `docs/gatsby-theme-catalyst-hydrogen`,
            type: `internal`,
          },
        ],
      },
      {
        name: `Migrating`,
        link: `/docs/migrating`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Philosophy`,
        link: `/docs/philosophy`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Contribution`,
        link: `/docs/contribution`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Acknowledgements`,
        link: `/docs/acknowledgements`,
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
        contentPath: `content/docs`,
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
    `gatsby-theme-catalyst-header-side`,
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
