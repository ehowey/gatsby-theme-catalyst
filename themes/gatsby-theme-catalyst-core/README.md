# Gatsby Theme Catalyst Core

This acts as a core theme on which all other themes are based. It houses a basic site architecture, as much logic as possible, along with most dependencies. Imagine this as the foundation of a house. There are some latent components which are used to enable easy shadowing in child themes. There are minimal styles applied at this stage. For an example of what this can look like when finished with styles and other themes check out - [gatsby-starter-catalyst-hydrogen](https://gatsby-starter-catalyst-hydrogen.netlify.app/).

## Documentation

[https://www.gatsbycatalyst.com/](https://www.gatsbycatalyst.com)

## Demos

- [gatsby-starter-catalyst-core](https://gatsby-starter-catalyst-core.netlify.app/)

## Theme Options

| Option                   | Values                                    | Description                                                                                 |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentPath`            | String                                    | Defaults to "content/pages", determines where the pages are created from.                   |
| `assetPath`              | String                                    | Defaults to "content/assets", determines where the page assets like images are located.     |
| `displaySiteLogo`        | true or false                             | Defaults to true, controls whether the logo is displayed                                    |
| `displaySiteLogoMobile`  | true or false                             | Defaults to true, controls whether the logo is displayed at the mobile breakpoint           |
| `displaySiteTitle`       | true or false                             | Defaults to true, controls whether the site title is displayed                              |
| `displaySiteTitleMobile` | true or false                             | Defaults to true, controls whether the site title is displayed at the mobile breakpoint     |
| `invertLogo`             | true or false                             | Defaults to false, controls whether the logo is inverted when the mobile menu is open       |
| `useStickyHeader`        | true or false                             | Defaults to false, controls whether the header is sticky or static                          |
| `useSocialLinks`         | true or false                             | Defaults to true, controls whether the social links are displayed or not                    |
| `useColorMode`           | true or false                             | Defaults to true, controls whether the dark mode toggle is available.                       |
| `useKatex`               | true or false                             | Defaults to false, enables gatsby-remark-katex for displaying math equations.               |
| `footerContentLocation`  | String value, "left", "right" or "center" | Defaults to "left", determines the location of the footer content.                          |
| `remarkImagesWidth`      | Integer value                             | Defaults to 1440, allows you to customize the image width option for gatsby-remarks-images. |
| `imageQuality`           | Integer value                             | Defaults to 50, allows you to customize the image quality on a scale of 0 - 100.            |

Example Config:

```js
   {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteLogo: true,
        displaySiteTitle: true,
        invertLogo: true,
        useStickyHeader: true,
      }
    }
```
