# Gatsby Theme Catalyst Core

**Blazing Start**
```sh
# create a new Gatsby site using the catalyst core starter site
gatsby new my-catalyst-starter-core https://github.com/ehowey/gatsby-starter-catalyst-core
```

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinoinated set of progressive themes and starters that can be used to accelerate web development. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [theme-ui](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/). I started this project to make freelancing easier for myself and assume others might benefit too. This project is early in its development life cycle and follows semantic versioning, breaking changes will result in version bump, e.g. `v0.1.x -> v0.2.0`, non-breaking changes will be minor versions, e.g. `v0.1.11 -> v.0.1.12`.

## Catalyst Themes and Starters

* [Gatsby-Theme-Catalyst-Core](https://github.com/ehowey/gatsby-theme-catalyst-core): *This acts as the core theme on which all other themes are based. It houses a basic, unstyled, site architecture along with most commonly needed dependencies. Uses theme-ui under the hood for styling changes and MDX for pages.*
  * [Gatsby-Theme-Catalyst-Onepage](https://github.com/ehowey/gatsby-theme-catalyst-onepage): *Child theme of the core theme. Allows for a single page website with anchor links and smooth scrolling in lieu of a traditional nav menu which would link to different pages*
  * [Gatsby-Starter-Catalyst-Core](https://github.com/ehowey/gatsby-starter-catalyst-core): *Starter for the core theme to make installation and customization easier*
  * [Gatsby-Starter-Catalyst-Onepage](https://github.com/ehowey/gatsby-starter-catalyst-onepage): *Starter for the onepage theme to make installation and customization easier*

## Installation and Use

### Quick Start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying a catalyst based starter, the themes will be included by default in the dependencies.

    ```sh
    # create a new Gatsby site using the catalyst core starter site
    gatsby new my-catalyst-starter-core https://github.com/ehowey/gatsby-starter-catalyst-core
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-catalyst-starter-core/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-catalyst-starter` directory in your code editor of choice and edit `src/pages/index.mdx`. Save your changes and the browser will update in real time!
    
You can read more about [using starters in the official documentation.](https://www.gatsbyjs.org/docs/starters/)

For more advanced users who want to dig into the guts of the themes and create their own starters the easiest way to do this is via [Yarn workspaces](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/). You will also want to read through the [themes documentation.](https://www.gatsbyjs.org/docs/themes/)

## Customizing the themes using Theme-UI and Emotion

[Read the theme-ui docs](https://www.theme-ui.com)

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

**Complementary Starter Sites**

The starter sites provide a "quick start" for site development using the themes as dependencies. Currently the starter sites only provide basic implementation of the themes. It is my vision however that in time there could be more styled and complex starters released which do not need as much customization and include more rigid styling. 

## Next Steps

This is a passion project for me.  I would love any additional feedback, suggestions and pull requests.  I can be contacted via email at: <eric@erichowey.dev>
