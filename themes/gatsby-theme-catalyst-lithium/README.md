# Gatsby Theme Catalyst Lithium

This is an MDX based personal blog theme that ties together the core theme, blog theme, header and footer themes and then uses this as a basis to create a complete website. Git is used as the CMS. Styling is intentionally basic and is intended to be customized in the starter via variants and Theme-UI. Includes support for featured images, social images, social media icons, and RSS feed.

## Documentation

[https://www.gatsbycatalyst.com/](https://www.gatsbycatalyst.com)

## Demos

- [gatsby-starter-catalyst-lithium](https://gatsby-starter-catalyst-lithium.netlify.app/)

## Catalyzing Start

```sh
# create a new Gatsby site using the catalyst writer starter site
gatsby new catalyst-hydrogen https://github.com/ehowey/gatsby-starter-catalyst-hydrogen
```

## Frontmatter Fields

The following fields are available in front matter.

| Field         | Required? | Values  | Description                                              |
| ------------- | --------- | ------- | -------------------------------------------------------- |
| title         | Yes       | String  | Title of the post                                        |
| date          | Yes       | Date    | Publication date, e.g. 2019-04-15                        |
| subTitle      | Yes       | String  | Sub title or deck for blog posts                         |
| author        | Yes       | String  | Author of the post                                       |
| featuredImage | Yes       | String  | Featured image to be used for the post                   |
| socialImage   | Yes       | String  | Social image to be used for the post                     |
| slug          | No        | String  | Optionally used to specify the link slug for the post    |
| authorLink    | Yes       | String  | Used as a link for the author name in the post summaries |
| tags          | No        | Array   | Tags for the post, ["tag1", "tag2", "tag3"]              |
| keywords      | No        | Array   | Keywords used for SEO, ["key1", "key2", "key3"]          |
| draft         | No        | Boolean | Defaults to false, set to true if a post is a draft      |

## Theme options

Lithium accepts all options from the core theme and blog theme directly, e.g. you can set `useColorMode` via `gatsby-theme-catalyst-lithium` and it is passed down to the correct theme appropriately.

For example the following config is valid:

```js
{
      resolve: `gatsby-theme-catalyst-lithium`,
      options: {
        // Core theme
        displaySiteLogo: false,
        displaySiteLogoMobile: false,
        footerContentLocation: "right",
        useStickyHeader: true,
        // Blog theme
        excerptLength: 200,
      },
    },
```

### Lithium Options

No custom options for this theme but accepts all options below.

### Blog Theme Options

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
