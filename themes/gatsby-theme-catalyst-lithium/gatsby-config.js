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
          invertSiteLogo: themeOptions.invertSiteLogo,
          useStickyHeader: themeOptions.useStickyHeader,
          useSocialLinks: themeOptions.useSocialLinks,
          useColorMode: themeOptions.useColorMode,
          useKatex: themeOptions.useKatex,
          footerContentLocation: themeOptions.footerContentLocation, // "left", "right", "center"
          remarkImagesWidth: themeOptions.remarkImagesWidth,
        },
      },
      `gatsby-theme-catalyst-header-top`,
      `gatsby-theme-catalyst-footer`,
      {
        resolve: `gatsby-theme-catalyst-blog`,
        options: {
          basePath: themeOptions.basePath || "/",
          contentPath: themeOptions.blogContentPath,
          assetPath: themeOptions.blogAssetPath,
          excerptLength: themeOptions.excerptLength,
          postListTitle: themeOptions.postListTitle || "Writing",
          displayPostListTitle: themeOptions.displayPostListTitle || true,
          rssTitle: themeOptions.rssTitle,
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
                        publicURL
                      }
                      featuredImage {
                        publicURL
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
                    ? `${siteUrl}${node.socialImage.publicURL}`
                    : hasFeatured
                    ? `${siteUrl}${node.featuredImage.publicURL}`
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
