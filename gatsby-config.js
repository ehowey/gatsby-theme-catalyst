module.exports = {
  siteMetadata: {
    title: `Catalyst Core`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    menuLinks:[
              {
                name:'Home',
                link:'/'
              }
            ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `src/`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/config/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["gatsby-theme-catalyst-core"],
      },
    }
  ],
}
