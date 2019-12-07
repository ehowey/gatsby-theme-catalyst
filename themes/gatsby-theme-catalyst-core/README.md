# Gatsby Theme Catalyst Core

This acts as a core theme on which all other themes are based. It houses a basic site architecture, as much logic as possible, along with most dependencies. Imagine this as the foundation of a house. There are some latent components which are used to enable easy shadowing in child themes. There are minimal styles applied at this stage. For an example of what this can look like when finished with styles and other themes check out - [gatsby-starter-catalyst-writer](https://gatsby-starter-catalyst-writer.netlify.com/).

**Demos:**

- [gatsby-starter-catalyst-core](https://gatsby-starter-catalyst-core.netlify.com/)

## Theme Options

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

| Option                 | Values                      | Description                                                                                               |
| ---------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentPath`          | String                      | Defaults to "content/pages", determines where the pages are created from.                                 |
| `assetPath`            | String                      | Defaults to "content/assets", determines where the page assets like images are located.                   |
| `displaySiteLogo`      | true or false               | Controls whether the logo is displayed                                                                    |
| `displaySiteTitle`     | true or false               | Controls whether the site title is displayed                                                              |
| `invertLogo`           | true or false               | Controls whether the logo is inverted when the mobile menu is open                                        |
| `useHero`              | true or false               | Flag to include a hero component in the site.                                                             |
| `useStickyHeader`      | true or false               | Controls whether the header is sticky or static                                                           |
| `mobileMenuBreakpoint` | String value, e.g. "1024px" | Sets the breakpoint for displaying the mobile menu, works independent of other breakpoints set in ThemeUI |
