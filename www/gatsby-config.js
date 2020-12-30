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
        name: `Tutorials`,
        link: `tutorials`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `Creating a blog with gatsby-theme-catalyst-lithium`,
            link: `/docs/tutorials/creating-a-blog-with-gatsby-theme-catalyst-lithium`,
            type: `internal`,
          },
          {
            name: `Building a website for a freelance writer using gatsby-theme-catalyst-hydrogen`,
            link: `/docs/tutorials/building-a-website-for-a-freelance-writer-using-gatsby-theme-catalyst-hydrogen`,
            type: `internal`,
          },
          {
            name: `Setting up gatsby-theme-catalyst-sanity`,
            link: `/docs/tutorials/setting-up-gatsby-theme-catalyst-sanity`,
            type: `internal`,
          },
        ],
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
        name: `SANITY.io Integration`,
        link: `/docs/sanity-io-integration`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Configuring Themes`,
        link: `configuring-themes`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `Overview of configuring themes`,
            link: `/docs/configuring-themes`,
            type: `internal`,
          },
          {
            name: `Gatsby-Config.js`,
            link: `/docs/gatsby-config`,
            type: `internal`,
          },
          {
            name: `Theme Options`,
            link: `/docs/theme-options`,
            type: `internal`,
          },
          {
            name: `Branding`,
            link: `/docs/branding`,
            type: `internal`,
          },
          {
            name: `Theme-UI`,
            link: `/docs/theme-ui`,
            type: `internal`,
          },
          {
            name: `Component Shadowing`,
            link: `/docs/component-shadowing`,
            type: `internal`,
          },
        ],
      },
      {
        name: `Layout Themes`,
        link: `layout-themes`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `gatsby-theme-catalyst-core`,
            link: `/docs/gatsby-theme-catalyst-core`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-header-top`,
            link: `/docs/gatsby-theme-catalyst-header-top`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-header-bigtop`,
            link: `/docs/gatsby-theme-catalyst-header-bigtop`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-header-side`,
            link: `/docs/gatsby-theme-catalyst-header-side`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-footer`,
            link: `/docs/gatsby-theme-catalyst-footer`,
            type: `internal`,
          },
        ],
      },
      {
        name: `Data Themes`,
        link: `data-themes`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `gatsby-theme-catalyst-blog`,
            link: `/docs/gatsby-theme-catalyst-blog`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-sanity`,
            link: `/docs/gatsby-theme-catalyst-sanity`,
            type: `internal`,
          },
        ],
      },
      {
        name: `Presentation Themes`,
        link: `presentation-themes`,
        type: `internal`, //internal or anchor
        subMenu: [
          {
            name: `gatsby-theme-catalyst-hydrogen`,
            link: `/docs/gatsby-theme-catalyst-hydrogen`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-helium`,
            link: `/docs/gatsby-theme-catalyst-helium`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-lithium`,
            link: `/docs/gatsby-theme-catalyst-lithium`,
            type: `internal`,
          },
          {
            name: `gatsby-theme-catalyst-bery`,
            link: `/docs/gatsby-theme-catalyst-bery`,
            type: `internal`,
          },
        ],
      },
      {
        name: `Browser Support`,
        link: `/docs/browser-support`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Migrating`,
        link: `/docs/migrating`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Versioning`,
        link: `/docs/versioning`,
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
        // useKatex: false,
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
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/**/*.html": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/page-data/*.json": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/app-data.json": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
        },
      },
    },
  ],
}
