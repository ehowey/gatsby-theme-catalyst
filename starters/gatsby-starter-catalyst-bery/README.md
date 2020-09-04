# Gatsby Starter Catalyst

Basic starter that could be used as a barebones starting point for building a finished website. Implements `gatsby-theme-catalyst-core`, `gatsby-theme-catalyst-header-top`, and `gatsby-theme-catalyst-footer`.

## Documentation

[https://www.gatsbycatalyst.com/](https://www.gatsbycatalyst.com)

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
sanity init
## Import the placeholder data
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

[Read the Gatsby Quick Start Guide](https://www.gatsbyjs.org/docs/quick-start)

## Demo

[https://gatsby-starter-catalyst-bery.netlify.app/](https://gatsby-starter-catalyst-bery.netlify.app/)

## About Gatsby Theme Catalyst

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinionated set of integrated themes and starters that can be used to accelerate your next Gatsby project. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).
