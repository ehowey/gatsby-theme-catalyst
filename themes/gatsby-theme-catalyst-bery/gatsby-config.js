module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-catalyst-core`,
        options: {
          contentPath: themeOptions.contentPath,
          assetPath: themeOptions.assetPath,
          displaySiteLogo: themeOptions.displaySiteLogo,
          displaySiteTitle: themeOptions.displaySiteTitle,
          displaySiteLogoMobile: themeOptions.displaySiteLogoMobile,
          displaySiteTitleMobile: themeOptions.displaySiteTitleMobile,
          invertLogo: themeOptions.invertLogo,
          useStickyHeader: themeOptions.useStickyHeader,
          useSocialLinks: themeOptions.useSocialLinks,
          useColorMode: themeOptions.useColorMode,
          useKatex: themeOptions.useKatex,
          footerContentLocation: themeOptions.footerContentLocation || "center", // "left", "right", "center"
        },
      },
      `gatsby-theme-catalyst-footer`,
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
                }
              `,
              serialize: ({
                query: {
                  site: {
                    siteMetadata: { siteUrl },
                  },
                  allSanityPost,
                },
              }) => {
                const rssFeed = allSanityPost.nodes.map((node) => {
                  const rssImage = node.featuredImage.asset.url
                  const serialized = {
                    guid: `${siteUrl}${node.slug.current}`,
                    url: `${siteUrl}${node.slug.current}`,
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
