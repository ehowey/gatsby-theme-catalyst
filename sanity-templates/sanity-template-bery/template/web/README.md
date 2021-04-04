# Gatsby Starter Catalyst Bery

This theme is for a personal blog and demonstrates tight integration with [SANITY.io](https://www.sanity.io/) as the CMS and Gatsby as the frontend. It comes with a preconfigured content schema for SANITY.io and demonstration data you can import for a quick start. It features Seo optimization, social image sharing, RSS feed integration, and a clean design language that focuses on your content.

This is also an example of "ejecting" from using a preset header themes and building your own custom header to interact with the other Catalyst themes. The header used here is completely custom for this theme, and not one of the prebuilt options available.

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
sanity install
## Setup a new SANITY.io dataset
## Choose Yes to reconfigure the SANITY project
## Chose Yes to use the default dataset configuration
sanity init
## Import the placeholder data
## Import to the "production" dataset
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

[Read the Gatsby Quick Start Guide](https://www.gatsbyjs.com/docs/quick-start)

## Demo

[https://gatsby-starter-catalyst-bery.netlify.app/](https://gatsby-starter-catalyst-bery.netlify.app/)

## About Gatsby Theme Catalyst

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.com/) were designed to provide an opinionated set of integrated themes and starters that can be used to accelerate your next Gatsby project. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).
