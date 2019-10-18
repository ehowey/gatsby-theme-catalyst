module.exports = {
  siteMetadata: {
    title: `Catalyst Blog`,
    description: `Speed up your Gatsby development workflow.`,
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-blog.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    pageLinks: [
      {
        name: `Design System`,
        link: `/design-system`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
    ],
    anchorLinks: [
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
      },
      {
        name: `Anchor 2`,
        link: `#anchor-2`,
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        url: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        url: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        url: `https://www.twitter.com/erchwy`,
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
        invertSiteLogo: true,
        mobileMenuBreakpoint: "768px",
        navType: "default", // "default", "anchor", "blended"
        headerPosition: "static", // "static" or "sticky" work best, "fixed" is possible
      },
    },
    {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        //These are the default paths provided
        basePath: `/blog`,
        contentPath: `src/blog/posts`,
        assetPath: `src/blog/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo-512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
