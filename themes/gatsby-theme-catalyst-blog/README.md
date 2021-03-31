# Gatsby Theme Catalyst Blog

This adds a blogging interface using MDX, similar to `gatsby-theme-blog-core` with some custom modifications. The theme can be added to any existing Catalyst-based site and will add blog functionality. This is a minimal implementation that is not designed to be used in a production site, but rather as a jumping off point for a production site.

The main features added to this blog theme are:

- Support for a featured image on the blog posts
- Support for a social image on the blog posts
- Support for categories and tags
- Support for different post types in the frontmatter to allow for conditional styling of posts
- Drafts flag in frontmatter so you can keep posts in your repo that are drafts and not built in the final site
- Ability to control the excerpt length used in post summaries

## Documentation

[https://www.gatsbycatalyst.com/](https://www.gatsbycatalyst.com)

## Demos

- [gatsby-starter-catalyst](https://gatsby-starter-catalyst.netlify.app/)
- [https://www.erichowey.dev/](https://www.erichowey.dev/)

## Theme options

| Option                 | Values  | Description                                                                                                             |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentPath`          | String  | Defaults to "content/posts", determines where the posts are created from.                                               |
| `assetPath`            | String  | Defaults to "content/assets", determines where the post assets like images are located.                                 |
| `basePath`             | String  | Defaults to "/blog", determines the page location for the post list.                                                    |
| `excerptLength`        | String  | Defaults to "140", determines the length of the excerpt use for post summaries.                                         |
| `postListTitle`        | String  | Defaults to "Posts", allows you to control the title of your post page, e.g. "Blog" or "Writing" or "Digital Garden"    |
| `displayPostListTitle` | Boolean | Defaults to true, allows you to remove the visual title of your post page but keep it in the page title in the browser. |
| `rssTitle`             | String  | Defaults to "RSS Feed", allows you to customize the title of the RSS feed.                                              |
| `rssDescription`       | String  | Defaults to "A great RSS feed", set the RSS description for your feed.                                                  |

Example Config:

```js
   {
      resolve: `gatsby-theme-catalyst-blog`,
      options: {
        basePath: `/`,
        contentPath: `src/content/posts`,
        assetPath: `src/content/post-images`,
        excerptLength: `280`,
      }
    }
```

## Frontmatter Fields

The following fields are available in front matter.

| Field                | Required? | Values  | Description                                              |
| -------------------- | --------- | ------- | -------------------------------------------------------- |
| title                | Yes       | String  | Title of the post                                        |
| date                 | Yes       | Date    | Publication date, e.g. 2019-04-15                        |
| subTitle             | No        | String  | Sub title or deck for blog posts                         |
| author               | No        | String  | Author of the post                                       |
| featuredImage        | No        | String  | Featured image to be used for the post                   |
| featuredImageCaption | No        | String  | Caption for the featured image                           |
| socialImage          | No        | String  | Social image to be used for the post                     |
| slug                 | No        | String  | Optionally used to specify the link slug for the post    |
| authorLink           | No        | String  | Used as a link for the author name in the post summaries |
| tags                 | No        | Array   | Tags for the post, ["tag1", "tag2", "tag3"]              |
| categories           | No        | Array   | Categories for the post, ["cats", "dogs", "snakes"]      |
| keywords             | No        | Array   | Keywords used for Seo, ["key1", "key2", "key3"]          |
| draft                | No        | Boolean | Defaults to false, set to true if a post is a draft      |

Example frontmatter:

```md
---
title: Hey, a draft post
date: 2019-04-15
featuredImage: ../assets/featured1.jpg
author: Eric Howey
authorLink: https://twitter.com/erchwy
tags: [Wicked, Awesome, Radical]
draft: true
slug: /blog/custom-post-slug
---
```

## About Gatsby Theme Catalyst

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.com/) were designed to provide an opinionated set of integrated themes and starters that can be used to accelerate your next Gatsby project. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).
