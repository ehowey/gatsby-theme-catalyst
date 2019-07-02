# \[WIP\] Gatsby Theme Catalyst Core

**Currently a work in progress - please be aware that there are rapid breaking changes at this point in the development. Not currerntly recommended for use.**

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinoinated set of progressive themes and starters that can be used to accelerate web development. I built this to meet my own needs and imagine that others would also have similar needs. You can imagine these themes and starters as a set of building blocks that are stacked on top of each other to create the finished product. 

## Catalyst Themes and Starters

* [Gatsby-Theme-Catalyst-Core](https://github.com/ehowey/gatsby-theme-catalyst-core)
* [Gatsby-Theme-Catalyst-Onepage](https://github.com/ehowey/gatsby-theme-catalyst-onepage)
* [Gatsby-Starter-Catalyst-Basic](https://github.com/ehowey/gatsby-starter-catalyst-basic)
* [Gatsby-Starter-Catalyst-Onepage](https://github.com/ehowey/gatsby-starter-catalyst-onepage)

## Installation and Use

The easiest way to begin using these themes is with one of the unstyled starters, e.g. [Gatsby-Starter-Catalyst-Basic](https://github.com/ehowey/gatsby-starter-catalyst-basic). These starters have the themes already setup as dependencies and will work "out of the box" following the normal starter [installation instructions](https://www.gatsbyjs.org/docs/starters/).  The themes are not designed to be modified themselves but rather the starters can be modified to shadow components and extend base theme styling and functionality. See the [GatsbyJS documentaiton about working with themes](https://www.gatsbyjs.org/docs/themes/) for additional information on shadow components and theme usage.

The themes themselves are published on npm and can be installed independently using `yard add gatsby-theme-catalyst-core` or `npm install gatsby-theme-catalyst-core`.  If you are using these themes in a development environment without a starter (or creating your own starter based on the themes) you might want to read [this blog post about Yarn workspaces](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/#reach-skip-nav).

## Philosophy

I created this series of themes to simplify my design and development workflow. My background is in working with Wordpress and I have always preferred to start with minimally styled boilerplate themes, e.g. [WP-Rig](https://github.com/wprig/wprig) and building forward from this basic starting point. Less is more.

What I love about themes is that I could create a "core" theme which is basic and unstyled and then layer complexity on top of this base theme as needed.  Think lego bricks or building blocks.  The idea is that the core theme serves as a base on top of which further, more specialized, content can be progressively added.  The vision is that the "themes" stay relatively clean and unstyled with basic starters associated with them.  The use of [themes from styled components](https://www.styled-components.com/docs/advanced) in combination with starters allows styling to be easily extended and modified to meet your final design goals.

## Opinionated Choices

I made a number of development decisions to speed up my workflow and simplify the road to a finished website. There are lots of different ways of accomplishing some of these things however from my research these seemed like the "best" tools for my own needs.

### Styled Components

I come from a background primarily in CSS/HTML, my javascript skills are admittedly somewhat basic. I can get by but it isn't always pretty. Styled compnents allowed for a simple way of including CSS-in-JS while retaining the fornmatting I was familiar with. The other main factor I was attracted to was the ability to create a "theme" (think design tokens) for the sites which simplified the process of changing colors, spacing, etc. This theme is then passed down to starters which can modify and extend this to meet their needs. Styled Components has a mature ecosystem and it is realtively easy to find answers to common design pain-points when working with styled components.

[Read the styled components docs](https://www.styled-components.com/docs)

### Typography.js

Again, like styled components, I appreciated the simplicity and maturity of this resource. Likesie the configuration file is passed down to child themes and starters which can then modify and extend this to meet their own design needs.  The default setting is use of a system font stack for both headers and body text.

[Read the typography.js docs](https://kyleamathews.github.io/typography.js/)
