const withDefaults = require(`./src/utils/default-options`)

module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions)
  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/posts`,
          name: options.contentPath || `content/posts`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.assetPath || `content/assets`,
          name: options.assetPath || `content/assets`,
        },
      },
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              output: `/rss.xml`,
              title: themeOptions.rssTitle || `RSS Feed`,
              query: `
                {
                  allCatalystPost(
                    sort: { fields: [date, title], order: DESC }
                    limit: 1000
                    filter: { draft: { eq: false } }
                  ) {
                    nodes {
                      id
                      slug
                      title
                      author
                      excerpt
                      date(formatString: "ddd, DD MMM YYYY HH:mm:ss ZZ")
                      socialImage {
                        childImageSharp {
                          resized:resize(width: 1024) {
                            src
                          }
                        }
                      }
                      featuredImage {
                        childImageSharp {
                          resized:resize(width: 1024) {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              `,
              serialize: ({
                query: {
                  site: {
                    siteMetadata: { siteUrl },
                  },
                  allCatalystPost,
                },
              }) => {
                const rssFeed = allCatalystPost.nodes.map((node) => {
                  const hasSocial = node.socialImage !== null
                  const hasFeatured = node.featuredImage !== null
                  const rssImage = hasSocial
                    ? `${siteUrl}${node.socialImage.childImageSharp.resized.src}`
                    : hasFeatured
                    ? `${siteUrl}${node.featuredImage.childImageSharp.resized.src}`
                    : null
                  const serialized = {
                    guid: `${siteUrl}${node.slug}`,
                    url: `${siteUrl}${node.slug}`,
                    title: node.title,
                    author: node.author,
                    description: node.excerpt,
                    pubDate: node.date,
                    enclosure: { url: rssImage },
                  }
                  return serialized
                })
                return rssFeed
              },
            },
          ],
        },
      },
    ].filter(Boolean),
  }
}
