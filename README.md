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

## Documentation

**Essential Reading**:

* [Gatsby Themes Docs](https://www.gatsbyjs.org/docs/themes/)
* [Theme-UI Docs](https://theme-ui.com/)
* [MDX Docs](https://mdxjs.com/)
* [Component Shadowsing in Gatsby Themes](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)

### Customizing the themes using Theme-UI and Emotion

Theme-UI is used throughout as this is the suggested best practice when building Gatsby themes. The power of Theme-UI lies in allowing easy changes to design tokens, such as colors, through the theme context. This allows for design tokens to be set and used across the themes and starter sites by way of component shadowing the base theme. 

The theme-ui files have many inline code comments to explain various design tokens if their prupose is not immediately obvious. The full theme-ui file with all of the options from `gatsby-theme-catalyst-core` can be viewed in the theme directory here:

[gatsby-theme-catalyst-core/tree/master/src/gatsby-plugin-theme-ui](https://github.com/ehowey/gatsby-theme-catalyst-core/tree/master/src/gatsby-plugin-theme-ui)

The file you should modify to [extend these settings by way of component shadowing](https://www.gatsbyjs.org/blog/2019-07-03-customizing-styles-in-gatsby-themes-with-theme-ui/) is  always located in the following location in the starters:

    .
    ├── src
      ├── gatsby-plugin-theme-ui
        ├── index.js
          

## Component Shadowing

[Read about component shadowing in detail.](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/)

Gatsby themes, and starter sites that use theme, allow for component shadowing.  This means that components from the original core theme can be replaced or modified in the site without changing the core files! This gives you amazing power as an end-user to create fully custom projects without having to worry about affecting the theme files. Longterm maintainability is a big win here.

## MDX Files

[Read the MDX docs](https://mdxjs.com/)

MDX files offer a number of improvements and simplifications for GatsbyJS site development and in my opinion are a no-brainer in place of standard markdown files. I also appreciate that the fallback can be to simply write normal markdown or javascript files, having access to MDX in your website development workflow is a progressive enhancement and does not break any backwards compatability with normal markdown and javascript files.


## Philosophy - Less is More

**Simple Core Theme**

`gatsby-theme-catalyst-core` was designed and built to be as simple and unstyled as possible. A barebones starting point which can be easily maintained in the future to manage dependencies on client sites.

**Child themes to extend the core theme**

These child-themes are focused on extending function and remain as design-agnostic as possible. Again this makes longterm maintenance easier for client sites. It is my preference to begin new projects without too much styling that has to be undone.

**Starter sites to extend and style the themes**

The starter sites provide a "quick start" for site development using the themes as dependencies. Currently the starter sites only provide basic implementation of the themes. It is my vision however that in time there could be more styled and complex starters released which do not need as much customization and include more rigid styling. 

## Next Steps

This is a passion project for me.  I would love any additional feedback, suggestions and pull requests.  I can be contacted via email at: <eric@erichowey.dev>
