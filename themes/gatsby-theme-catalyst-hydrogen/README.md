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

### Core Theme Options

| Option             | Values        | Description                                                                             |
| ------------------ | ------------- | --------------------------------------------------------------------------------------- |
| `contentPath`      | String        | Defaults to "content/pages", determines where the pages are created from.               |
| `assetPath`        | String        | Defaults to "content/assets", determines where the page assets like images are located. |
| `displaySiteLogo`  | true or false | Defaults to true, controls whether the logo is displayed                                |
| `displaySiteTitle` | true or false | Defaults to true, controls whether the site title is displayed                          |
| `invertSiteLogo`   | true or false | Defaults to false, controls whether the logo is inverted when the mobile menu is open   |
| `useStickyHeader`  | true or false | Defaults to false, controls whether the header is sticky or static                      |
| `useSocialLinks`   | true or false | Defaults to true, controls whether the social links are displayed or not                |
| `useColorMode`     | true or false | Defaults to true, controls whether the dark mode toggle is available.                   |

### Sanity Theme Options

| Option                   | Values  | Description                                                                                                                                |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| sanityProjectId          | String  | Required, Sanity project ID                                                                                                                |
| sanityDataset            | String  | Defaults to "production", change to reflect the dataset name you are using in Sanity                                                       |
| sanityToken              | String  | Defaults to null, should only be used with env variables for security purposes.                                                            |
| sanityWatchMode          | Boolean | Defaults to true, toggle for watch mode                                                                                                    |
| sanityOverlayDrafts      | Boolean | Defaults to false, toggle for live previews, a token and private dataset is required.                                                      |
| sanityCreatePages        | Boolean | Defaults to true, toggle to turn on/off page generation from SANITY.io.                                                                    |
| sanityCreatePosts        | Boolean | Defaults to true, toggle to turn on/off blog post page generation from SANITY.io.                                                          |
| sanityCreatePostsList    | Boolean | Defaults to true, toggle to turn on/off blog post list generation from SANITY.io.                                                          |
| sanityCreateProjects     | Boolean | Defaults to true, toggle to turn on/off project page generation from SANITY.io.                                                            |
| sanityCreateProjectsList | Boolean | Defaults to true, toggle to turn on/off project list generation from SANITY.io.                                                            |
| sanityPostPath           | String  | Defaults to "/posts", is the path for the posts index and also before posts, e.g. site.com/posts/post-1.                                   |
| sanityProjectPath        | String  | Defaults to "/projects", is the path for the projects index and also before projects, e.g. site.com/projects/post-1.                       |
| useSanityTheme           | Boolean | Experimental. Enables merging the theme-ui theme specification from SANITY.io allowing use of a GUI to change the site theme, e.g. colors. |

### Environment Variables

You can read the [Gatsby docs about environment variables](https://www.gatsbyjs.org/docs/environment-variables/) which may be helpful.

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
