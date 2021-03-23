# Gatsby Theme Catalyst Bery

This theme is for a personal blog and demonstrates tight integration with [SANITY.io](https://www.sanity.io/) as the CMS and Gatsby as the frontend. It comes with a preconfigured content schema for SANITY.io and demonstration data you can import for a quick start. It features SEO optimization, social image sharing, RSS feed integration, and a clean design language that focuses on your content.

This is also an example of "ejecting" from using a preset header themes and building your own custom header to interact with the other Catalyst themes. The header used here is completely custom for this theme, and not one of the prebuilt options available.

## Demos

- [gatsby-starter-catalyst-bery](https://gatsby-starter-catalyst-bery.netlify.app/)

## Catalyzing Start

Because this theme and starter relies on a SANITY.io backend there are a few additional steps to get up and running.

### Install the theme and starter

```shell
## Install the theme and starter
gatsby new bery https://github.com/ehowey/gatsby-starter-catalyst-bery`
cd bery
```

### Install SANITY.io

```shell
## Initiate a new SANITY project using their CLI
cd sanity-studio
sanity install
## Setup a new SANITY.io dataset
## Choose Yes to reconfigure the SANITY project
## Chose Yes to use the default dataset configuration
sanity init
## Import the placeholder data
## Import to the "production" dataset
cd data
sanity dataset import production.tar.gz
# Deploy the graphql schema
cd ..
sanity graphql deploy
# Start your studio on a localhost
sanity start
```

### Update your gatsby-config

You need to update the `projectId` from SANITY.io so that the theme can properly source its data. You can find this in the file `sanity-studio/sanity.json`.

Update your `gatsby-config.js`:

```js
{
  resolve: `gatsby-theme-catalyst-bery`,
  options: {
    sanityProjectId: `c1x70rzt`, // Change this line
  },
},
```

### Run gatsby develop

You can now run `gatsby develop` and your site will build correctly sourcing data from SANITY.io!

## Theme options

Bery accepts all options from the core theme and sanity theme directly, e.g. you can set `useColorMode` via `gatsby-theme-catalyst-bery` and it is passed down to the correct theme appropriately. Note that because of the custom header component and the theme design some theme options may not work as expected - e.g. the site title and avatar image are not optional as they hardcoded into the custom header. This theme was built with a more singluar design and could be modified via component shadowing if needed.

For example the following config is valid:

```js
{
      resolve: `gatsby-theme-catalyst-bery`,
      options: {
        sanityProjectId: `4w5ygwpy`, // Required
        rssTitle: "My Great Blog",
        rssDescription: "A little description of who I am and why I am great.",
        // Defaults
        // sanityPostPath: `/posts`,
        // footerContentLocation: "center",
        // sanityPostListTitle: "Blog",
        // sanityPostListPath: `/`,
      },
    },
```

### Bery Options

| Option                 | Values  | Description                                                          |
| ---------------------- | ------- | -------------------------------------------------------------------- |
| `rssTitle`             | String  | Set the RSS title for your feed.                                     |
| `rssDescription`       | String  | Set the RSS description for your feed.                               |
| `useHeaderSocialLinks` | Boolean | Defaults to true, controls the visibility of social links in header. |
| `useColorMode`         | Boolean | Defaults to true, controls the visibility of dark mode toggle.       |

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
| `useAlertBanner`    | Boolean       | Defaults to false, toggles the display of an alert banner across the top of the page.       |

### Footer Theme Options

| Option                  | Values                                    | Description                                                              |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------ |
| `useFooterSocialLinks`  | true or false                             | Defaults to true, controls whether the social links are displayed or not |
| `footerContentLocation` | String value, "left", "right" or "center" | Defaults to "left", determines the location of the footer content.       |

## Variants

To implement in a future release.
