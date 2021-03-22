# Gatsby Theme Catalyst Core

This acts as a core theme on which all other themes are based. It houses a basic site architecture, as much logic as possible, along with most dependencies. Imagine this as the foundation of a house. There are some latent components which are used to enable easy shadowing in child themes. There are minimal styles applied at this stage. For an example of what this can look like when finished with styles and other themes check out - [gatsby-starter-catalyst-hydrogen](https://gatsby-starter-catalyst-hydrogen.netlify.app/).

## Documentation

[https://www.gatsbycatalyst.com/](https://www.gatsbycatalyst.com)

## Demos

- [gatsby-starter-catalyst-core](https://gatsby-starter-catalyst-core.netlify.app/)

## Theme Options

| Option              | Values        | Description                                                                                 |
| ------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| `contentPath`       | String        | Defaults to "content/pages", determines where the pages are created from.                   |
| `assetPath`         | String        | Defaults to "content/assets", determines where the page assets like images are located.     |
| `useKatex`          | true or false | Defaults to false, enables gatsby-remark-katex for displaying math equations.               |
| `remarkImagesWidth` | Integer value | Defaults to 1440, allows you to customize the image width option for gatsby-remarks-images. |
| `imageQuality`      | Integer value | Defaults to 50, allows you to customize the image quality on a scale of 0 - 100.            |

Example Config:

```js
   {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        remarkImagesWidth: 1920,
        imageQuality: 90
        assetPath: "src/images/"
      }
    }
```

## About Gatsby Theme Catalyst

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.com/) were designed to provide an opinionated set of integrated themes and starters that can be used to accelerate your next Gatsby project. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).
