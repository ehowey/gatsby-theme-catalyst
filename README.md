# Gatsby Theme Catalyst Core

**Blazing Start**
```sh
# create a new Gatsby site using the catalyst core starter site
gatsby new my-catalyst-starter-core https://github.com/ehowey/gatsby-starter-catalyst-core
```
[Read the Gatsby Quick Start Guide](https://www.gatsbyjs.org/docs/quick-start)

## Overview

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinoinated set of progressive themes and starters that can be used to accelerate web development. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. 

These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/). 

## Catalyst Themes and Starters

* [Gatsby-Theme-Catalyst-Core](https://github.com/ehowey/gatsby-theme-catalyst-core): *This acts as the core theme on which all other themes are based. It houses a basic, unstyled, site architecture along with most commonly needed dependencies. Uses theme-ui under the hood for styling changes and MDX for pages.*
  * [Gatsby-Theme-Catalyst-Onepage](https://github.com/ehowey/gatsby-theme-catalyst-onepage): *Child theme of the core theme. Allows for a single page website with anchor links and smooth scrolling in lieu of a traditional nav menu which would link to different pages*
  * [Gatsby-Starter-Catalyst-Core](https://github.com/ehowey/gatsby-starter-catalyst-core): *Starter for the core theme to make installation and customization easier*
  * [Gatsby-Starter-Catalyst-Onepage](https://github.com/ehowey/gatsby-starter-catalyst-onepage): *Starter for the onepage theme to make installation and customization easier*

## Customizing the themes and starters

**Essential Reading**:

* [Gatsby Themes Docs](https://www.gatsbyjs.org/docs/themes/)
* [Theme-UI Docs](https://theme-ui.com/)
* [MDX Docs](https://mdxjs.com/)
* [Component Shadowsing in Gatsby Themes](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)

### Gatsby-Config

Some theme options are set via the `gatsby-config.js` file. Specifically the navigation menu, social links menu, author name, site title, etc. The starter sites come with some pre-configured options in here you can modify.

The **social links** option is a bit unique. You can specify three different locations in the settings, `header`, `footer`, and `all` which will locate the icons appropriately.  It will work with most major social platforms and has a fallback for displaying the text.

### Customizing the themes using Theme-UI and Design Tokens

[Read about using theme-ui to customize a theme](https://www.gatsbyjs.org/blog/2019-07-03-customizing-styles-in-gatsby-themes-with-theme-ui/)

Theme-UI based design tokens are used throughout the Catalyst series of themes and starters as this is the suggested best practice when building Gatsby themes. The file you should modify to set design tokens is always located in the following location in the starters:

    .
    ├── src
      ├── gatsby-plugin-theme-ui
        ├── index.js
        
 Try adding the code to the theme-ui and see what happens:
 
 ```
import merge from "deepmerge";
import { baseTheme } from "gatsby-theme-catalyst-core";

export default merge(baseTheme, {
  //Updated theme options go here.
    colors: {
      primary: "tomato",
      secondary: "crimson",

    header: {
      background: "tomato",
      backgroundOpen: "crimson",
    },

    footer: {
      background: "crimson",
    },
  },
});
```

### Typography and changing fonts

The deafult settings in the theme include a system font stack for both the body and headings. These themes do not use typography.js at this time, I may change this in the future.

To add a custom font you need to first add the font as a dependency in your starter site, like this for Raleway:

`yarn add typeface-raleway`

Then at the top of your theme-ui file you will need to import the font and declare it, like this for Raleway:

```
import merge from "deepmerge";
import { baseTheme } from "gatsby-theme-catalyst-core";
import "typeface-raleway";

export default merge(baseTheme, {
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

This is a passion project for me.  I would love any additional feedback, suggestions and pull requests.  I can be contacted via email at: <eric@erichowey.dev>
