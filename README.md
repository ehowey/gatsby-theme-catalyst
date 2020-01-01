<p align="center">
    <img alt="Gatsby Theme Catalyst" src="https://www.erichowey.dev/images/catalyst-logo-100.png" width="100" />
</p>
<h1 align="center">
  Gatsby Theme Catalyst
</h1>

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinionated set of integrated themes and starters that can be used to accelerate your next Gatsby project. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).

**Catalyzing Start:**

```shell
   # create a new Gatsby site using the basic starter
    gatsby new catalyst-basic https://github.com/ehowey/gatsby-starter-catalyst-basic
   # change into your new directory
    cd catalyst-basic
   # launch the site
    gatsby develop
```

**Example sites built with Gatsby-Theme-Catalyst:**

- [www.erichowey.dev](https://www.erichowey.dev/) - Based on `gatsby-starter-catalyst-blog`, [Github Repo](https://github.com/ehowey/erichoweydev)
- [www.briannasharpe.com](https://www.briannasharpe.com/) - Based on `gatsby-starter-catalyst-writer`, [Github Repo](https://github.com/ehowey/briannasharpe)

## Docs Index

- [List of all themes](#list-of-all-themes)
- [Accessibility](#accessibility)
- [Getting Started](#getting-started)
- [Customizing the themes](#customizing-the-themes)

  - [Theme options](#theme-options)
  - [Modifying gatsby-config.js](#modifying-gatsby-configjs)
  - [Menu Links](#menu-links)
  - [Social Links](#social-links)
  - [Theme-ui, variants, and design tokens](#theme-ui-variants-and-design-tokens)
  - [Typography and changing fonts](#typography-and-changing-fonts)
  - [Changing logos and logo sizes](#changing-logos-and-logo-sizes)

- [Philosophy](#philosophy---less-is-more)
- [Acknowledgements and Contribution](#next-steps-and-contribution)

## List of all themes

| Theme                                | Demo                                                                                  | Description                                                                                                                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gatsby-theme-catalyst-core`         | [gatsby-starter-catalyst-core](https://gatsby-starter-catalyst-core.netlify.com/)     | This acts as the core theme on which all other themes are based. It houses a basic site architecture and components along with most commonly needed dependencies. Think of this as the foundation of a home. |
| `gatsby-theme-catalyst-header-basic` | [gatsby-starter-catalyst-basic](https://gatsby-starter-catalyst-basic.netlify.com/)   | This adds a simple header to the core theme which includes support for anchor links and smooth scrolling out of the box. Logo on the left, nav on the right.                                                 |
| `gatsby-theme-catalyst-footer-basic` | [gatsby-starter-catalyst-basic](https://gatsby-starter-catalyst-basic.netlify.com/)   | This adds a very basic footer to the core theme.                                                                                                                                                             |
| `gatsby-theme-catalyst-blog`         | [gatsby-starter-catalyst-blog](https://gatsby-starter-catalyst-blog.netlify.com/)     | This provides a basic plug-and-play blog for any Catalyst based site.                                                                                                                                        |
| `gatsby-theme-catalyst-writer`       | [gatsby-starter-catalyst-writer](https://gatsby-starter-catalyst-writer.netlify.com/) | This is the first complete site using the catalyst set of themes. Designed to be used by a freelance writer as their portfolio. Sanity is used as a CMS.                                                     |

## Accessibility

Accessibility is important to me. I have made every effort to address accessibility issues in these themes and starters but would love additional feedback and help with more advanced accessibility topics as I am sure there are things I missed. Currently this theme is scoring 100 in Google Lighthouse audit for accessibility and passing tests using cypress-axe.

## Getting Started

This set of themes is developer focused and I assume you have a basic knowledge of the command line, GatsbyJS, web development, git, etc. If you are brand new check out the [getting started docs](https://www.gatsbyjs.org/docs/) for GatsbyJS.

**Helpful Reading**:

- [Gatsby Theme Docs](https://www.gatsbyjs.org/docs/themes/)
- [Using yarn workspaces with Gatsby themes](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/)
- [Theme-UI Docs](https://theme-ui.com/)
- [MDX Docs](https://mdxjs.com/)
- [Component Shadowing in Gatsby Themes](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)

### Using a gatsby-starter to implement the themes

All of these themes are available on NPM but the easiest way to get started is via a gatsby-starter that includes the theme(s) already. Currently the following starters are available:

**gatsby-starter-catalyst-core**: `gatsby new catalyst-core https://github.com/ehowey/gatsby-starter-catalyst-core`

**gatsby-starter-catalyst-basic**: `gatsby new catalyst-basic https://github.com/ehowey/gatsby-starter-catalyst-basic`

**gatsby-starter-catalyst-blog**: `gatsby new catalyst-blog https://github.com/ehowey/gatsby-starter-catalyst-blog`

**gatsby-starter-catalyst-writer**: `gatsby new catalyst-writer https://github.com/ehowey/gatsby-starter-catalyst-writer`

## Customizing the themes

### Theme options

There are a number of options for the core theme, blog theme, and writer theme that act as flags to control various aspects of the site appearance and function. Try experimenting with some of these to get a feel for how it changes the site.

**Core theme:**

| Option                 | Values                      | Description                                                                                               |
| ---------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentPath`          | String                      | Defaults to "content/pages", determines where the pages are created from.                                 |
| `assetPath`            | String                      | Defaults to "content/assets", determines where the page assets like images are located.                   |
| `displaySiteLogo`      | true or false               | Controls whether the logo is displayed                                                                    |
| `displaySiteTitle`     | true or false               | Controls whether the site title is displayed                                                              |
| `invertLogo`           | true or false               | Controls whether the logo is inverted when the mobile menu is open                                        |
| `useHero`              | true or false               | Flag to include a hero component in the site.                                                             |
| `useStickyHeader`      | true or false               | Controls whether the header is sticky or static                                                           |
| `mobileMenuBreakpoint` | String value, e.g. "1024px" | Sets the breakpoint for displaying the mobile menu, works independent of other breakpoints set in ThemeUI |

**Blog theme:**

| Option          | Values | Description                                                                             |
| --------------- | ------ | --------------------------------------------------------------------------------------- |
| `contentPath`   | String | Defaults to "content/posts", determines where the posts are created from.               |
| `assetPath`     | String | Defaults to "content/assets", determines where the post assets like images are located. |
| `basePath`      | String | Defaults to "/blog", determines the page location for the post list.                    |
| `excerptLength` | String | Defaults to "140", determines the length of the excerpt use for post summaries.         |

**Writer theme:**

| Option          | Values | Description                                                                          |
| --------------- | ------ | ------------------------------------------------------------------------------------ |
| sanityDataset   | String | Defaults to "production", change to reflect the dataset name you are using in Sanity |
| sanityProjectID | String | Required, Sanity project ID                                                          |

### Modifying Gatsby-Config.JS

Theme options are set via the `gatsby-config.js` file. Specifically the navigation menu, social links menu, author name, site title, etc. The starter sites come with some pre-configured options you can modify. Most of these are fairly standard and where possible I Have included inline comments in the starters to help explain if needed. The `socialLinks` object and `menuLinks` object are a bit more complicated to support easier theme customization via the config file.

#### Menu Links

The `menuLinks` is fairly standard with the addition of one field, `type`, which controls whether the menu link is rendered as a Gatsby Link component or an anchor link using `react-scroll`. The options are `internal` or `anchor`.

Example Config:

```
menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`, //internal or anchor
      },
]
```

#### Social Links

The `socialLinks` in gatsby-config is a bit unique. You can specify a social media provider such as Twitter and also three different locations in the settings, `header`, `footer`, and `all` which will locate the icons appropriately. It will work with most major social platforms and has a fallback for displaying the text if a logo isn't pre-configured.

Example Config:

```
socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
      },
    ],
```

### Theme-UI, variants, and design tokens

[Read about using theme-ui to customize a theme](https://www.gatsbyjs.org/blog/2019-07-03-customizing-styles-in-gatsby-themes-with-theme-ui/)

Theme-UI based design tokens are used throughout the Catalyst series of themes and starters as this is the suggested best practice when building Gatsby themes. The theme is based on the [tailwind presets](https://github.com/system-ui/theme-ui/tree/master/packages/preset-tailwind) as this provides a good base set of standard spacings, sizings, etc. You will also see a reference to colors like `baseColors.pink[5]` in the theme file, these basecolors can be found on the [TailwindCSS docs](https://tailwindcss.com/docs/customizing-colors/).

The file you should modify to set design tokens is always located in the following location:

    .
    ├── src
      ├── gatsby-theme-catalyst-core
        ├── theme.js

Try changing some colors in the file and see what happens!

Some major areas of the site are preconfigured to use [variants](https://theme-ui.com/guides/variants). This allows you to more easily change css styles without having to shadow a whole file. The following variants are available to use:

- `variants.main`: Targets the <main> component in the site, useful for changing site margins/content size.
- `variants.container`: Targets the container <div> for the content, useful for changing site margins/content size.
- `variants.header`: Targets the root <header> component
- `variants.footer`: Targets the root <footer> component
- `variants.navLinkStyles`: Targets the container styles for the nav links in the header

### Typography and changing fonts

To add a custom font you need to first add the font as a dependency in your starter site, for example:

`yarn add typeface-raleway`

Then at the top of `src\gatsby-theme-catalyst-core\theme.js` file you will need to import the font and declare it, like this for Raleway:

```
import { tailwind } from "@theme-ui/preset-tailwind"
import "typeface-raleway"

export default {
  ...tailwind,
  fonts: {
    ...tailwind.fonts,
    body: '"Raleway", sans-serif',
  },
}
```

### Changing logos and logo sizes

A common change you will need to make is to the logo and logo size.

The logo is found by default in the `src/content/assets` folder under the names `catalyst-site-logo.png`. Change this file to reflect your branding. You can use other file extensions, e.g. .jpg but you cannot change the file name. It is queried by file name for those that know graphQL, not by relativePath. So it will work with `catalyst-site-logo.jpg` but not with `logo-main.jpg`.

The logo size is managed in the following location: `src/gatsby-plugin-theme-ui/index.js`. In many cases the size of your logo will control the size of your navbar/header. There is also an option in the sizes file which can override the auto height inherited from content and specify a fixed height.

Try this in `src/gatsby-theme-catalyst-core/components/theme.js` for a big logo:

```
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthXS: "80px", // Logo width on extra small screens, up to 480px
    logoWidthS: "150px", // Logo width on small screens, 480px - 768px
    logoWidthM: "150px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "260px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "260px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "80px", // Logo height on extra small screens, up to 480px
    logoHeightS: "150px", // Logo height on small screens, 480px - 768px
    logoHeightM: "150px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "260px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "260px", // Logo height on extra large screens, above 1440px
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
```

### Custom hero component using component shadowing

There is optional support for a custom hero component which is enabled by setting `useHero: true` in the core theme options. You can then access the hero component via component shadowing in this location for a starter: `src/gatsby-theme-catalyst-core/components/hero.js`. This section of the website comes below the header but before the content from MDX files.

For an example of this in action see [gatsby-starter-catalyst-basic](https://gatsby-starter-catalyst-basic.netlify.com/).

### catalyst-site-social.png

This file is used as the default image in places like Twitter and Facebook. This file is best in a 2:1 aspect ratio, something like 1200x600px. See the [twitter card docs](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image) for more information. You can use alternate image types such as .jpg if you want. It is queried by file name for those that know graphQL, not by relativePath. So it will work with `catalyst-social.jpg` but not with `social-image.jpg`.

### catalyst-site-icon.png

There is also a file called `catalyst-site-icon.png` that provides your icon for use `gatsby-plugin-manifest` to create icons for web, PWA, etc. This file should be square and at least 512x512px in dimensions.

## Philosophy - Less is More

**Simple Core Theme**

`gatsby-theme-catalyst-core` was designed and built to be as simple and unstyled as possible. A barebones starting point which can be easily maintained in the future to manage dependencies on client sites.

**Child themes to extend the core theme**

These child-themes are focused on extending function and remain as design-agnostic as possible. Again this makes longterm maintenance easier for client sites. It is my preference to begin new projects without too much styling that has to be undone.

**Starter sites to extend and style the themes**

The starter sites provide a "quick start" for site development using the themes as dependencies. Currently the starter sites only provide basic implementation of the themes. It is my vision however that in time there could be more styled and complex starters released which do not need as much customization and include more rigid styling.

## Next Steps and Contribution

This is a passion project for me. I would love any additional feedback, suggestions and pull requests. I can be contacted via email at: <eric@erichowey.dev>

I would like to acknowledge all of the help I have gotten in working on this project from people answering questions on the GatsbyJS issues, [Chris Biscardi's blog](https://www.christopherbiscardi.com/), and the work that [@4lpine](https://twitter.com/4lpine) and [@jxnblk](https://twitter.com/jxnblk) have done documenting Theme-ui so well.
