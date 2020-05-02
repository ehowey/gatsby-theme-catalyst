# Gatsby Starter Catalyst Blog

This implements `gatsby-theme-catalyst-core`, `gatsby-theme-catalyst-core`, `gatsby-theme-catalyst-core`, `gatsby-theme-catalyst-core`. This provides a basic starting point for developing your own personal blog and portfolio site.

**Documentation**

[Read the docs on Github](https://github.com/ehowey/gatsby-theme-catalyst)

**Catalyzing Start**

```sh
# create a new Gatsby site using the catalyst blog starter site
gatsby new catalyst-blog https://github.com/ehowey/gatsby-starter-catalyst-blog
```

[Read the Gatsby Quick Start Guide](https://www.gatsbyjs.org/docs/quick-start)

**Demo**

[https://gatsby-starter-catalyst-blog.netlify.app/](https://gatsby-starter-catalyst-blog.netlify.app/)

## Blog theme options

| Option          | Values | Description                                                                             |
| --------------- | ------ | --------------------------------------------------------------------------------------- |
| `contentPath`   | String | Defaults to "content/posts", determines where the posts are created from.               |
| `assetPath`     | String | Defaults to "content/assets", determines where the post assets like images are located. |
| `basePath`      | String | Defaults to "/blog", determines the page location for the post list.                    |
| `excerptLength` | String | Defaults to "140", determines the length of the excerpt use for post summaries.         |

Example Config:

```
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

| Field         | Required? | Values  | Description                                              |
| ------------- | --------- | ------- | -------------------------------------------------------- |
| title         | Yes       | String  | Title of the post                                        |
| date          | Yes       | Date    | Publication date, e.g. 2019-04-15                        |
| author        | Yes       | String  | Author of the post                                       |
| featuredImage | Yes       | String  | Featured image to be used for the post                   |
| slug          | No        | String  | Optionally used to specify the link slug for the post    |
| authorLink    | No        | String  | Used as a link for the author name in the post summaries |
| tags          | No        | Array   | Tags for the post, ["tag1", "tag2", "tag3"]              |
| keywords      | No        | Array   | Keywords used for SEO, ["key1", "key2", "key3"]          |
| draft         | No        | Boolean | Defaults to false, set to true if a post is a draft      |

Example frontmatter:

```
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

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinionated set of integrated themes and starters that can be used to accelerate your next Gatsby project. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).
