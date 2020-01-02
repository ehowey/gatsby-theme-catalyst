# Gatsby Theme Catalyst Core

This acts as a core theme on which all other themes are based. It houses a basic site architecture, as much logic as possible, along with most dependencies. Imagine this as the foundation of a house. There are some latent components which are used to enable easy shadowing in child themes. There are minimal styles applied at this stage. For an example of what this can look like when finished with styles and other themes check out - [gatsby-starter-catalyst-writer](https://gatsby-starter-catalyst-writer.netlify.com/).

**Demos:**

- [gatsby-starter-catalyst-core](https://gatsby-starter-catalyst-core.netlify.com/)

## Theme Options

| Option                 | Values                      | Description                                                                                                                    |
| ---------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `contentPath`          | String                      | Defaults to "content/pages", determines where the pages are created from.                                                      |
| `assetPath`            | String                      | Defaults to "content/assets", determines where the page assets like images are located.                                        |
| `displaySiteLogo`      | true or false               | Defaults to true, controls whether the logo is displayed                                                                       |
| `displaySiteTitle`     | true or false               | Defaults to true, controls whether the site title is displayed                                                                 |
| `invertLogo`           | true or false               | Defaults to false, controls whether the logo is inverted when the mobile menu is open                                          |
| `useHero`              | true or false               | Defaults to false, flag to include a hero component in the site                                                                |
| `useStickyHeader`      | true or false               | Defaults to false, controls whether the header is sticky or static                                                             |
| `useSocialLinks`       | true or false               | Defaults to true, controls whether the social links are displayed or not                                                       |
| `mobileMenuBreakpoint` | String value, e.g. "1024px" | Defaults to "768px", sets the breakpoint for displaying the mobile menu, works independent of other breakpoints set in ThemeUI |

Example Config:

```
   {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        displaySiteLogo: true,
        displaySiteTitle: true,
        invertLogo: true,
        mobileMenuBreakpoint: "1024px",
        useStickyHeader: true,
        useHero: "true",
      }
    }
```
