# Gatsby Theme Catalyst Hydrogen

This is a full-featured theme that ties together the core theme, header and footer themes and then uses this as a basis to create a complete website. The theme relies on data from [SANITY.io](https://www.sanity.io/) and includes a customized content studio for the CMS.

## Documentation

[https://www.gatsbycatalyst.com/](https://www.gatsbycatalyst.com)

## Demos

- [gatsby-starter-catalyst-hydrogen](https://gatsby-starter-catalyst-hydrogen.netlify.app/)
- [www.briannasharpe.com](https://www.briannasharpe.com)

## Catalyzing Start

```sh
# create a new Gatsby site using the catalyst writer starter site
gatsby new catalyst-hydrogen https://github.com/ehowey/gatsby-starter-catalyst-hydrogen
```

## Theme options

Hydrogen accepts all options from the core theme and sanity theme directly, e.g. you can set `sanityProjectId` via `gatsby-theme-catalyst-hydrogen` and it is passed down to the correct theme appropriately. You may want to consider using environment variables for some of your SANITY.io information, if you are using a token then you _need_ to use environment variables so you do not commit this to GitHub.

For example the following config is valid:

```js
{
      resolve: `gatsby-theme-catalyst-hydrogen`,
      options: {
        // Core theme
        invertSiteLogo: false,
        footerContentLocation: "right",
        useStickyHeader: true,
        // Sanity theme
        sanityProjectId: "abc123",
        sanityDataset: "development",
      },
    },
```

### Sanity Theme Options

| Option                        | Values  | Description                                                                               |
| ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| sanityProjectId               | String  | Required, Sanity project ID                                                               |
| sanityDataset                 | String  | Defaults to "production", change to reflect the dataset name you are using in Sanity      |
| sanityToken                   | String  | Defaults to null, should only be used with env variables for security purposes.           |
| sanityWatchMode               | Boolean | Defaults to true, toggle for watch mode                                                   |
| sanityOverlayDrafts           | Boolean | Defaults to false, toggle for live previews, a token and private dataset is required.     |
| sanityCreatePages             | Boolean | Defaults to true, toggle to turn on/off page generation from SANITY.io.                   |
| sanityCreatePosts             | Boolean | Defaults to true, toggle to turn on/off blog post page generation from SANITY.io.         |
| sanityCreateCategories        | Boolean | Defaults to true, toggle to turn on/off category page generation from SANITY.io.          |
| sanityCreatePostsList         | Boolean | Defaults to true, toggle to turn on/off blog post list generation from SANITY.io.         |
| sanityCreateProjects          | Boolean | Defaults to true, toggle to turn on/off project page generation from SANITY.io.           |
| sanityCreateProjectsList      | Boolean | Defaults to true, toggle to turn on/off project list generation from SANITY.io.           |
| sanityPostPath                | String  | Defaults to "/posts", is the path for before posts, e.g. site.com/posts/post-1.           |
| sanityPostListPath            | String  | Defaults to "/posts", is the path for the posts list, e.g. site.com/posts/.               |
| sanityProjectPath             | String  | Defaults to "/projects", is the path for before projects, e.g. site.com/projects/post-1.  |
| sanityProjectListPath         | String  | Defaults to "/projects", is the path for the projects list page, e.g. site.com/projects/. |
| sanityPostListTitle           | String  | Defaults to "Posts", is title for the posts list page.                                    |
| sanityProjectListTitle        | String  | Defaults to "Projects", is title for the projects list page.                              |
| sanityDisplayPostListTitle    | Boolean | Defaults to true, toggle to turn on/off the post list title.io.                           |
| sanityDisplayProjectListTitle | Boolean | Defaults to true, toggle to turn on/off the project list title.io.                        |

### Core Theme Options

| Option              | Values        | Description                                                                                 |
| ------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| `contentPath`       | String        | Defaults to "content/pages", determines where the pages are created from.                   |
| `assetPath`         | String        | Defaults to "content/assets", determines where the page assets like images are located.     |
| `useKatex`          | true or false | Defaults to false, enables gatsby-remark-katex for displaying math equations.               |
| `remarkImagesWidth` | Integer value | Defaults to 1440, allows you to customize the image width option for gatsby-remarks-images. |
| `imageQuality`      | Integer value | Defaults to 50, allows you to customize the image quality on a scale of 0 - 100.            |

### Header Theme Options

| Option                 | Values        | Description                                                              |
| ---------------------- | ------------- | ------------------------------------------------------------------------ |
| `useStickyHeader`      | true or false | Defaults to false, controls whether the header is sticky or static       |
| `useHeaderSocialLinks` | true or false | Defaults to true, controls whether the social links are displayed or not |
| `useColorMode`         | true or false | Defaults to true, controls whether the dark mode toggle is available.    |

### Footer Theme Options

| Option                  | Values                                    | Description                                                              |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| `useFooterSocialLinks`  | true or false                             | Defaults to true, controls whether the social links are displayed or not |
| `footerContentLocation` | String value, "left", "right" or "center" | Defaults to "left", determines the location of the footer content.       |

### Environment Variables

You can read the [Gatsby docs about environment variables](https://www.gatsbyjs.com/docs/environment-variables/) which may be helpful.

At the top of your gatsby-config.js file you will want the following, `require("dotenv").config()`

Then in your site you can create a `.env` file in your main site directory with the following information. You do not want to commit this file to git as the token should remain private.

Example .env:

```env
SANITY_PROJECT_ID = utcr8kb1
SANITY_DATASET = production
SANITY_TOKEN = skRE6nh0PRCFP4juyGzMC7gvlop (actual token is much longer)
```

Example Config:

```js
{
  resolve: `gatsby-theme-catalyst-hydrogen`,
  options: {
    sanityProjectID: process.env.SANITY_PROJECT_ID,
    sanityDataset: process.env.SANITY_DATASET,
  },
},
```
