module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
          contentPath: themeOptions.contentPath,
          assetPath: themeOptions.assetPath,
          remarkImagesWidth: themeOptions.remarkImagesWidth,
          imageQuality: themeOptions.imageQuality,
          useAlertBanner: themeOptions.useAlertBanner,
        },
      },
      {
        resolve: `gatsby-theme-catalyst-footer`,
        options: {
          useFooterSocialLinks: themeOptions.useFooterSocialLinks,
          footerContentLocation: themeOptions.footerContentLocation, // "left", "right", "center"
        },
      },
      {
        resolve: `gatsby-theme-catalyst-sanity`,
        options: {
          sanityProjectId: themeOptions.sanityProjectId,
          sanityDataset: themeOptions.sanityDataset,
          sanityToken: themeOptions.sanityToken,
          sanityWatchMode: themeOptions.sanityWatchMode,
          sanityOverlayDrafts: themeOptions.sanityOverlayDrafts,
          sanityCreatePages: themeOptions.sanityCreatePages,
          sanityCreatePosts: themeOptions.sanityCreatePosts,
          sanityCreatePostsList: themeOptions.sanityCreatePostsList,
          sanityCreateCategories: themeOptions.sanityCreateCategories,
          sanityCreateProjects: themeOptions.sanityCreateProjects || false,
          sanityCreateProjectsList:
            themeOptions.sanityCreateProjectsList || false,
          sanityPostPath: themeOptions.sanityPostPath || "/posts",
          sanityPostListPath: themeOptions.sanityPostListPath || "/",
          sanityProjectPath: themeOptions.sanityProjectPath,
          sanityProjectListPath: themeOptions.sanityProjectListPath,
          sanityPostListTitle: themeOptions.sanityPostListTitle || "Blog",
          sanityDisplayPostListTitle: themeOptions.sanityDisplayPostListTitle,
          sanityProjectListTitle: themeOptions.sanityProjectListTitle,
          sanityDisplayProjectListTitle:
            themeOptions.sanityDisplayProjectListTitle,
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
                  site_url: siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              output: `/rss.xml`,
              title: themeOptions.rssTitle || `RSS Feed`,
              description: themeOptions.rssDescription || `A great RSS feed`,
              query: `
                {
                  allSanityPost(
                    sort: { fields: [date, title], order: DESC }
                    limit: 1000
                  ) {
                    nodes {
                      id
                      date(formatString: "ddd, DD MMM YYYY HH:mm:ss ZZ")
                      title
                      slug {
                        current
                      }
                      author {
                        name
                      }
                      featuredImage {
                        asset {
                          url
                        }
                      }
                      excerpt(limit: 280)
                    }
                  }
                  catalystSanityConfig {
                    sanityPostPath
                  }
                }
              `,
              serialize: ({
                query: {
                  site: {
                    siteMetadata: { siteUrl },
                  },
                  catalystSanityConfig,
                  allSanityPost,
                },
              }) => {
                const rssFeed = allSanityPost.nodes.map((node) => {
                  const rssImage = node.featuredImage.asset.url
                  const rootPath = siteUrl
                    .concat(catalystSanityConfig.sanityPostPath)
                    .replace(/\/*$/, `/`)
                  const rssUrl = rootPath
                    .concat(node.slug.current)
                    .replace(/\/*$/, `/`)
                  const serialized = {
                    guid: rssUrl,
                    url: rssUrl,
                    title: node.title,
                    author: node.author.name,
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
