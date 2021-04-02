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
        link: `/docs/getting-started/`,
      },
      {
        name: `Tutorials`,
        link: `tutorials`,
        subMenu: [
          {
            name: `Creating a blog with gatsby-theme-catalyst-lithium`,
            link: `/docs/tutorials/creating-a-blog-with-gatsby-theme-catalyst-lithium/`,
          },
          {
            name: `Building a website for a freelance writer using gatsby-theme-catalyst-hydrogen`,
            link: `/docs/tutorials/building-a-website-for-a-freelance-writer-using-gatsby-theme-catalyst-hydrogen/`,
          },
          {
            name: `Setting up gatsby-theme-catalyst-sanity`,
            link: `/docs/tutorials/setting-up-gatsby-theme-catalyst-sanity/`,
          },
        ],
      },
      {
        name: `Starters`,
        link: `/docs/starters/`,
      },
      {
        name: `Accessibility`,
        link: `/docs/accessibility/`,
      },
      {
        name: `Seo`,
        link: `/docs/seo/`,
      },
      {
        name: `SANITY.io Integration`,
        link: `/docs/sanity-io-integration/`,
      },
      {
        name: `Configuring Themes`,
        link: `configuring-themes`,
        subMenu: [
          {
            name: `Overview of configuring themes`,
            link: `/docs/configuring-themes/`,
          },
          {
            name: `Gatsby-Config.js`,
            link: `/docs/gatsby-config/`,
          },
          {
            name: `Theme Options`,
            link: `/docs/theme-options/`,
          },
          {
            name: `Branding`,
            link: `/docs/branding/`,
          },
          {
            name: `Theme-UI`,
            link: `/docs/theme-ui/`,
          },
          {
            name: `Component Shadowing`,
            link: `/docs/component-shadowing/`,
          },
        ],
      },
      {
        name: `Layout Themes`,
        link: `layout-themes`,
        subMenu: [
          {
            name: `gatsby-theme-catalyst-core`,
            link: `/docs/gatsby-theme-catalyst-core/`,
          },
          {
            name: `gatsby-theme-catalyst-header-top`,
            link: `/docs/gatsby-theme-catalyst-header-top/`,
          },
          {
            name: `gatsby-theme-catalyst-header-bigtop`,
            link: `/docs/gatsby-theme-catalyst-header-bigtop/`,
          },
          {
            name: `gatsby-theme-catalyst-header-side`,
            link: `/docs/gatsby-theme-catalyst-header-side/`,
          },
          {
            name: `gatsby-theme-catalyst-footer`,
            link: `/docs/gatsby-theme-catalyst-footer/`,
          },
        ],
      },
      {
        name: `Data Themes`,
        link: `data-themes`,
        subMenu: [
          {
            name: `gatsby-theme-catalyst-blog`,
            link: `/docs/gatsby-theme-catalyst-blog/`,
          },
          {
            name: `gatsby-theme-catalyst-sanity`,
            link: `/docs/gatsby-theme-catalyst-sanity/`,
          },
        ],
      },
      {
        name: `Presentation Themes`,
        link: `presentation-themes`,
        subMenu: [
          {
            name: `gatsby-theme-catalyst-hydrogen`,
            link: `/docs/gatsby-theme-catalyst-hydrogen/`,
          },
          {
            name: `gatsby-theme-catalyst-helium`,
            link: `/docs/gatsby-theme-catalyst-helium/`,
          },
          {
            name: `gatsby-theme-catalyst-lithium`,
            link: `/docs/gatsby-theme-catalyst-lithium/`,
          },
          {
            name: `gatsby-theme-catalyst-bery`,
            link: `/docs/gatsby-theme-catalyst-bery/`,
          },
        ],
      },
      {
        name: `Roadmap`,
        link: `/docs/roadmap/`,
      },
      {
        name: `Browser Support`,
        link: `/docs/browser-support/`,
      },
      {
        name: `Migrating`,
        link: `/docs/migrating/`,
      },
      {
        name: `Versioning`,
        link: `/docs/versioning/`,
      },
      {
        name: `Philosophy`,
        link: `/docs/philosophy/`,
      },
      {
        name: `Contribution`,
        link: `/docs/contribution/`,
      },
      {
        name: `Acknowledgements`,
        link: `/docs/acknowledgements/`,
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
        contentPath: `content/docs`,
        useAlertBanner: true,
      },
    },
    {
      resolve: `gatsby-theme-catalyst-footer`,
      options: {
        // Default options are
        // useFooterSocialLinks: true,
        footerContentLocation: "right", // "left", "right", "center"
      },
    },
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
    `gatsby-plugin-remove-serviceworker`,
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
