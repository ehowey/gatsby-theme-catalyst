module.exports = {
  siteMetadata: {
    title: `Catalyst Basic`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-basic.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`,
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        type: `internal`,
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
        displaySiteLogo: true,
        displaySiteTitle: true,
        invertSiteLogo: false,
        useHero: true,
        mobileMenuBreakpoint: "768px",
        headerPosition: "static", // "static" or "sticky" work best, "fixed" is possible
      },
    },
    `gatsby-theme-catalyst-header-basic`,
    `gatsby-theme-catalyst-footer-basic`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/logo-512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
