<p align="center">
    <img alt="Gatsby Catalyst Themes" src="https://www.erichowey.dev/images/catalyst-logo.png" width="100" />
</p>
<h1 align="center">
  Gatsby Catalyst Themes
</h1>

**Currently a WIP, rapid changes at this time**

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinoinated set of progressive themes and starters that can be used to accelerate web development. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).

| Theme                                | Demo                                                                                  | Description                                                                                                                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `gatsby-theme-catalyst-core`         | [gatsby-starter-catalyst-core](https://gatsby-starter-catalyst-core.netlify.com/)     | This acts as the core theme on which all other themes are based. It houses a basic site architecture and components along with most commonly needed dependencies. Think of this as the foundation of a home. |
| `gatsby-theme-catalyst-header-basic` | [gatsby-starter-catalyst-basic](https://gatsby-starter-catalyst-basic.netlify.com/)   | This adds a simple header to the core theme which includes support for anchor links and smooth scrolling out of the box. Logo on the left, nav on the right.                                                 |
| `gatsby-theme-catalyst-footer-basic` | [gatsby-starter-catalyst-basic](https://gatsby-starter-catalyst-basic.netlify.com/)   | This adds a very basic footer to the core theme.                                                                                                                                                             |
| `[WIP]gatsby-theme-catalyst-blog`    | [gatsby-starter-catalyst-blog](https://gatsby-starter-catalyst-blog.netlify.com/)     | [WIP] This will eventually be a plug-and-play blog for any Catalyst based site.                                                                                                                              |
| `gatsby-theme-catalyst-writer`       | [gatsby-starter-catalyst-writer](https://gatsby-starter-catalyst-writer.netlify.com/) | This is the first complete site using the catalyst set of themes. Designed to be used by a freelance writer as their portfolio. Sanity is used as a CMS.                                                     |

## Accessibility

Accesibility is important to me. I have made every effort to address accessibility issues in these themes and starters but would love additional feedback and help with more advanced accessibility topics as I am sure there are things I missed. Currently this theme is scoring 100 in Google Lighthouse audit for accessibility.

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

**gatsby-starter-catalyst-writer**: `gatsby new catalyst-writer https://github.com/ehowey/gatsby-starter-catalyst-writer`

### Modifying Gatsby-Config.JS

Theme options are set via the `gatsby-config.js` file. Specifically the navigation menu, social links menu, author name, site title, etc. The starter sites come with some pre-configured options in here you can modify.

**Core Theme Options**

```
   {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteLogo: true,
        displaySiteTitle: true,
        invertLogo: true,
        mobileMenuBreakpoint: "1024px",
        useStickyHeader: true,
        useHero: "true",
      }
    }
```

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

### Social Links

This option in gatsby-config is a bit unique. You can specify a social media provider such as Twitter and also three different locations in the settings, `header`, `footer`, and `all` which will locate the icons appropriately. It will work with most major social platforms and has a fallback for displaying the text if a logo isn't pre-configured.

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

### Customizing the themes using Theme-UI and Design Tokens

[Read about using theme-ui to customize a theme](https://www.gatsbyjs.org/blog/2019-07-03-customizing-styles-in-gatsby-themes-with-theme-ui/)

Theme-UI based design tokens are used throughout the Catalyst series of themes and starters as this is the suggested best practice when building Gatsby themes. [Deepmerge](https://www.npmjs.com/package/deepmerge) is used to manage the shadowing of design tokens in the starters. The file you should modify to set design tokens is always located in the following location:

    .
    ├── src
      ├── gatsby-plugin-theme-ui
        ├── index.js

Try adding this code to the `index.js` file and see what happens:

```
import merge from "deepmerge"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { baseColors } from "@theme-ui/preset-tailwind"

export default merge(BaseTheme, {
  colors: {
    background: baseColors.pink[4],
  },
})
```

### Typography and changing fonts

To add a custom font you need to first add the font as a dependency in your starter site, for example:

`yarn add typeface-raleway`

Then at the top of `src\gatsby-plugin-theme-ui\index.js` file you will need to import the font and declare it, like this for Raleway:

```
import merge from "deepmerge"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import "typeface-raleway"

export default merge(BaseTheme, {
  fonts: {
    body: "Raleway, sans-serif",
    heading: "inherit",
  },
})
```

### Changing logos and logo sizes

A common change you will need to make is to the logo and logo size.

The logo is found by default in the `src/content/assets` folder under the names `catalyst-logo.png`. Change this file to reflect your branding. You can use other file extensions, e.g. .jpg but you cannot change the file name. It is queried by file name for those that know graphQL, not by relativePath. So it will work with `catalyst-logo.jpg` but not with `logo-main.jpg`.

The logo size is managed in the following location: `src/gatsby-plugin-theme-ui/index.js`. In many cases the size of your logo will control the size of your navbar/header. There is also an option in the sizes file which can override the auto height inherited from content and specify a fixed height.

Try this in `src/gatsby-plugin-theme-ui/index.js` for a big logo:

```
import merge from "deepmerge"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  sizes: {
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthSmall: "100px", // Logo width on small screens, up to 768px
    logoWidthMedium: "200px", // Logo width on medium screens, 768px - 1024px
    logoWidthLarge: "300px", // Logo width on large screens, above 1024px
    logoHeightSmall: "100px", // Logo height on small screens, up to 768px
    logoHeightMedium: "200px", // Logo width on medium screens, 768px - 1024px
    logoHeightLarge: "300px", // Logo width on large screens, above 1024px
  },
})
```

### Custom hero component using component shadowing

There is optional support for a custom hero component which is enabled by setting `useHero: true` in the core theme options. You can then access the hero component via component shadowing in this location for a starter: `src/gatsby-theme-catalyst-core/components/hero.js`. This section of the website comes below the header but before the content from MDX files and is only visible on the home page.

For an example of this in action see [gatsby-starter-catalyst-basic](https://gatsby-starter-catalyst-basic.netlify.com/).

### catalyst-icon.png

There is also a file called `catalyst-icon.png` that provides your icon for use in the progressive web app, web browsers and in other locations. This file should be square and at least 512x512px in dimensions. You can use other file extensions, e.g. .jpg but you cannot change the file name.

### catalyst-social.png

This file is used as the default image in places like Twitter and Facebook. This file is best in a 2:1 aspect ratio, something like 1200x600px. See the [twitter card docs](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image) for more information. You can use alternate image types such as .jpg if you want. It is queried by file name for those that know graphQL, not by relativePath. So it will work with `catalyst-social.jpg` but not with `social-image.jpg`.

## Philosophy - Less is More

**Simple Core Theme**

`gatsby-theme-catalyst-core` was designed and built to be as simple and unstyled as possible. A barebones starting point which can be easily maintained in the future to manage dependencies on client sites.

**Child themes to extend the core theme**

These child-themes are focused on extending function and remain as design-agnostic as possible. Again this makes longterm maintenance easier for client sites. It is my preference to begin new projects without too much styling that has to be undone.

**Starter sites to extend and style the themes**

The starter sites provide a "quick start" for site development using the themes as dependencies. Currently the starter sites only provide basic implementation of the themes. It is my vision however that in time there could be more styled and complex starters released which do not need as much customization and include more rigid styling.

## Next Steps and Contribution

This is a passion project for me. I would love any additional feedback, suggestions and pull requests. I can be contacted via email at: <eric@erichowey.dev>
