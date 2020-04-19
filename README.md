<p align="center">
    <img alt="Gatsby Theme Catalyst" src="https://www.gatsbycatalyst.com/images/catalyst-site-icon-100.png" width="100" />
</p>
<h1 align="center">
  Gatsby Theme Catalyst
</h1>

<h3 align="center"><i>Accelerate</i> your next Gatsby project<br /><a href="https://www.gatsbycatalyst.com">www.gatsbycatalyst.com</a></h3>

![Cypress Tests](https://github.com/ehowey/gatsby-theme-catalyst/workflows/Test%20Themes/badge.svg) ![npm](https://img.shields.io/npm/dm/gatsby-theme-catalyst-core) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

Gatsby Theme Catalyst is an an opinionated set of integrated themes and starters that can be used as a boilerplate to accelerate your next [Gatsby](https://www.gatsbyjs.org) project. There is a single "core" theme in which most dependencies and utility components are contained followed by progressively more styled and refined child themes and starters. These themes use [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).

**Catalyzing Start:**

```shell
   # create a new Gatsby site using the basic starter
    gatsby new catalyst https://github.com/ehowey/gatsby-starter-catalyst
   # change into your new directory
    cd catalyst
   # launch the site
    gatsby develop
```

**Example sites built with Gatsby-Theme-Catalyst:**

- [www.erichowey.dev](https://www.erichowey.dev/) - Based on `gatsby-starter-catalyst-blog`, [Github Repo](https://github.com/ehowey/erichoweydev)
- [www.briannasharpe.com](https://www.briannasharpe.com/) - Based on `gatsby-starter-catalyst-hydrogen`, [Github Repo](https://github.com/ehowey/briannasharpe)
- [www.gatsbycatalyst.com](https://www.gatsbycatalyst.com) - Based on `gatsby-starter-catalyst` and `gatsby-theme-catalyst-header-side` with a custom index page.

## :rocket: Getting Started

[https://www.gatsbycatalyst.com/docs/getting-started](https://www.gatsbycatalyst.com/docs/getting-started)

## :book: Docs

[https://www.gatsbycatalyst.com/docs/](https://www.gatsbycatalyst.com/docs/)

## List of themes

| Theme                                                                                                       | Demo                                                                                      | Description                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [gatsby-theme-catalyst-core](https://www.gatsbycatalyst.com/docs/gatsby-theme-catalyst-core/)               | [gatsby-starter-catalyst-core](https://gatsby-starter-catalyst-core.netlify.app/)         | This acts as the core theme on which all other themes are based. It houses a basic site architecture and components along with most commonly needed dependencies. Think of this as the foundation of a home. |
| [gatsby-theme-catalyst-header-top](https://www.gatsbycatalyst.com/docs/gatsby-theme-catalyst-header-top/)   | [gatsby-starter-catalyst](https://gatsby-starter-catalyst.netlify.app/)                   | This adds a simple header to the core theme which includes support for anchor links and smooth scrolling out of the box. Logo on the left, nav on the right.                                                 |
| [gatsby-theme-catalyst-header-side](https://www.gatsbycatalyst.com/docs/gatsby-theme-catalyst-header-side/) | [gatsby-starter-catalyst-blog](https://gatsby-starter-catalyst-blog.netlify.app/)         | This adds a sidebar style header to the core theme which includes support for anchor links and smooth scrolling out of the box. Logo is stacked on top, then title, then nav.                                |
| [gatsby-theme-catalyst-footer](https://www.gatsbycatalyst.com/docs/gatsby-theme-catalyst-footer/)           | [gatsby-starter-catalyst](https://gatsby-starter-catalyst.netlify.app/)                   | This adds a very basic footer to the core theme.                                                                                                                                                             |
| [gatsby-theme-catalyst-blog](https://www.gatsbycatalyst.com/docs/gatsby-theme-catalyst-blog/)               | [gatsby-starter-catalyst-blog](https://gatsby-starter-catalyst-blog.netlify.app/)         | This provides a basic plug-and-play blog for any Catalyst based site.                                                                                                                                        |
| [gatsby-theme-catalyst-sanity](https://www.gatsbycatalyst.com/docs/gatsby-theme-catalyst-sanity/)           | [gatsby-starter-catalyst-sanity](https://gatsby-starter-catalyst-sanity.netlify.app/)     | This is a base theme for SANITY.io integration with catalyst themes and starters.                                                                                                                            |
| [gatsby-theme-catalyst-hydrogen](https://www.gatsbycatalyst.com/docs/gatsby-theme-catalyst-hydrogen/)       | [gatsby-starter-catalyst-hydrogen](https://gatsby-starter-catalyst-hydrogen.netlify.app/) | This is a complete site using the catalyst set of themes. Designed to be used by a freelance writer as their portfolio. SANITY.io is used as a CMS.                                                          |

## Philosophy

<i>Less is more</i>

**Simple Core Theme**

`gatsby-theme-catalyst-core` was designed and built to be as simple and unstyled as possible. A barebones starting point which can be easily maintained in the future to manage dependencies on client sites.

**Child themes to extend the core theme**

These child-themes are focused on extending function and remain as design-agnostic as possible. Again this makes longterm maintenance easier for client sites. It is my preference to begin new projects without too much styling that has to be undone.

**Starter sites to extend and style the themes**

The starter sites provide a "quick start" for site development using the themes as dependencies. Currently the starter sites only provide basic implementation of the themes. It is my vision however that in time there could be more styled and complex starters released which do not need as much customization and include more rigid styling.

## Contribution

This is a passion project for me that I work on in my spare time. I would love any additional feedback, suggestions and pull requests. Contributions are welcomed and encouraged.

I can be contacted via email at: <eric@erichowey.dev> if you have questions.

## Acknowledgements

I would like to acknowledge all of the help I have gotten in working on this project from people answering questions on the GatsbyJS issues, [Chris Biscardi's blog](https://www.christopherbiscardi.com/), and the work that [@4lpine](https://twitter.com/4lpine) and [@jxnblk](https://twitter.com/jxnblk) have done documenting Theme-ui so well.

The vision for this set of themes was heavily influenced by [WP Rig](https://wprig.io/) and [Underscores](https://underscores.me/) from the Wordpress world. My hope was to create a similar kind of simple boilerplate that could be used as a jumping off point for my own custom work.
