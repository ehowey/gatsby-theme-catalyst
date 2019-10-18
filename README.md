# Gatsby Catalyst Themes

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinoinated set of progressive themes and starters that can be used to accelerate web development. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters.

These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).

**Catalyst Themes and Starters**

- [Gatsby-Theme-Catalyst-Core](https://github.com/ehowey/gatsby-theme-catalyst-core): _This acts as the core theme on which all other themes are based. It houses a basic, unstyled, site architecture along with most commonly needed dependencies. Uses theme-ui under the hood for styling changes and MDX for pages._
  - [Gatsby-Starter-Catalyst-Core](https://github.com/ehowey/gatsby-starter-catalyst-core): _Starter for the core theme to make installation and customization easier_

## Getting started with Catalyst themes

**Blazing Start**

```sh
# Create a new Gatsby site using the catalyst core starter site
gatsby new my-catalyst-starter-core https://github.com/ehowey/gatsby-starter-catalyst-core
```

[Read the Gatsby Quick Start Guide](https://www.gatsbyjs.org/docs/quick-start)

**Advanced Start**

```sh
# Clone the main theme repository
git clone https://github.com/ehowey/gatsby-theme-catalyst.git
# Enter the theme directory
cd gatsby-theme-catalyst
# Install dependencies and setup workspaces
yarn
# Use workspaces to launch a starter
yarn workspace gatsby-starter-catalyst-core develop
```

[Read this blog post on using yarn workspaces with Gatsby themes](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/)

## Customizing the themes and starters

**Essential Reading**:

- [Gatsby Themes Docs](https://www.gatsbyjs.org/docs/themes/)
- [Theme-UI Docs](https://theme-ui.com/)
- [MDX Docs](https://mdxjs.com/)
- [Component Shadowsing in Gatsby Themes](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)

### Gatsby-Config

Some theme options are set via the `gatsby-config.js` file. Specifically the navigation menu, social links menu, author name, site title, etc. The starter sites come with some pre-configured options in here you can modify.

**Theme Options**

```
   {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteLogo: true,
        displaySiteTitle: true,
        invertLogo: true,
        mobileMenuBreakpoint: "1024px",
        navType: "default",
        headerPosition: "static",
      }
    }
```

| Option                 | Values                         | Description                                                                                               |
| ---------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `displaySiteLogo`      | true or false                  | Controls whether the logo is displayed                                                                    |
| `displaySiteTitle`     | true or false                  | Controls whether the site title is displayed                                                              |
| `invertLogo`           | true or false                  | Controls whether the logo is inverted when the mobile menu is open                                        |
| `navType`              | "default", "anchor", "blended" | Sets the navigation type, see below for details.                                                          |
| `headerPosition`       | "static", "sticky" or "fixed"  | Controls CSS position value for the site header                                                           |
| `mobileMenuBreakpoint` | String value, e.g. "1024px"    | Sets the breakpoint for displaying the mobile menu, works independent of other breakpoints set in ThemeUI |

**Social Links**

This option is a bit unique. You can specify a social media provider such as Twitter and also three different locations in the settings, `header`, `footer`, and `all` which will locate the icons appropriately. It will work with most major social platforms and has a fallback for displaying the text if a logo isn't pre-configured.

### Nav Types

**Default**

This is just a standard navigation bar which relies only on the `pageLinks` values from `gatsby-config.js`. Logo on the left, bar on the right.

**Anchor**

This is set up for single page sites. Works best if you also set `headerPosition: "sticky"` in `gatsby-config.js`. This menu bar only relies on values from the `anchorLinks` object. Uses [react-scroll](https://www.npmjs.com/package/react-scroll) under the hood to control the page navigation.

**Blended**

This is a mixed menu with both anchor links and page links together. This is set up to work for a site that is primarily single page but might have one or two page links in the menu bar. For instance a portfolio page that also wanted a seperate blog page alongside anchor links. Anchor links are on the left, page links on the right.

### Customizing the themes using Theme-UI and Design Tokens

[Read about using theme-ui to customize a theme](https://www.gatsbyjs.org/blog/2019-07-03-customizing-styles-in-gatsby-themes-with-theme-ui/)

Theme-UI based design tokens are used throughout the Catalyst series of themes and starters as this is the suggested best practice when building Gatsby themes. A combination of straight exports and [deepmerge](https://www.npmjs.com/package/deepmerge) is used to manage the shadowing of design tokens. The files you should modify to set design tokens are always located in the following location in the starters:

    .
    ├── src
      ├── gatsby-plugin-theme-ui
        ├── breakpoints.js
        ├── colors.js
        ├── fonts.js
        ├── fontSizes.js
        ├── fontWeights.js
        ├── lineHeights.js
        ├── sizes.js
        ├── spaces.js
        ├── styles.js
        ├── variants.js

Try adding this code to the `colors.js` file and see what happens:

```
import merge from "deepmerge"
import { BaseThemeColors } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeColors, {
  header: {
    background: "red",
    backgroundOpen: "pink",
    text: "yellow",
    textOpen: "white",
    icons: "purple",
    iconsHover: "green",
    iconsOpen: "white",
  },
})
```

### Typography and changing fonts

The default settings in the theme include a system font stack for both the body and headings. These themes do not use typography.js at this time.

To add a custom font you need to first add the font as a dependency in your starter site, like this for Raleway:

`yarn add typeface-raleway`

Then at the top of `src\gatsby-plugin-theme-ui\fonts.js` file you will need to import the font and declare it, like this for Raleway:

```
import merge from "deepmerge";
import { BaseThemeFonts } from "gatsby-theme-catalyst-core";
import "typeface-raleway";

export default merge(BaseThemeFonts, {
  //Updated theme options go here.
  fonts: {
      text: "Raleway, sans-serif",
      heading: "inherit",
      monospace: "Menlo, monospace",
    },
});
```

## Philosophy - Less is More

**Simple Core Theme**

`gatsby-theme-catalyst-core` was designed and built to be as simple and unstyled as possible. A barebones starting point which can be easily maintained in the future to manage dependencies on client sites.

**Child themes to extend the core theme**

These child-themes are focused on extending function and remain as design-agnostic as possible. Again this makes longterm maintenance easier for client sites. It is my preference to begin new projects without too much styling that has to be undone.

**Starter sites to extend and style the themes**

The starter sites provide a "quick start" for site development using the themes as dependencies. Currently the starter sites only provide basic implementation of the themes. It is my vision however that in time there could be more styled and complex starters released which do not need as much customization and include more rigid styling.

## Next Steps

This is a passion project for me. I would love any additional feedback, suggestions and pull requests. I can be contacted via email at: <eric@erichowey.dev>
