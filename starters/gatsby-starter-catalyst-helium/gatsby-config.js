module.exports = {
  siteMetadata: {
    title: `Helium`,
    description: `Speed up your Gatsby development workflow.`,
    keywords: [`gatsby`, `theme`, `react`, `blog`],
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-helium.netlify.app`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `About`,
        link: `/about`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Work`,
        link: `/work`,
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
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-helium`,
      options: {
        // Core theme
        displaySiteLogo: false,
        displaySiteLogoMobile: false,
        footerContentLocation: "right",
        remarkImagesWidth: 1920,
        // Blog theme
        excerptLength: 200,
        // Helium
        useHero: true,
      },
    },
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
