module.exports = {
  siteMetadata: {
    title: `Blog`,
    description: `Speed up your Gatsby development workflow.`,
    author: `Eric Howey`,
    siteUrl: `https://gatsby-starter-catalyst-blog.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        type: `internal`,
      },
      {
        name: `Blog`,
        link: `/blog`,
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
      options: {},
    },
    {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        //These are the default paths provided
        basePath: `/blog`,
        contentPath: `content/posts`,
        assetPath: `content/assets`,
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
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/logo-512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
