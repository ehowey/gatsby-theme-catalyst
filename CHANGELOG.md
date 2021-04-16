# Change Log

All notable changes to this project will be documented in this file

## v6.0.0

Please see https://www.gatsbycatalyst.com/docs/migrating/#v600 for details on v6.0.0. Please note that all packages were unified at v6.0.0 so some packages jumpe from v1 or v2 straight to v6. This version includes support for Gatsby v3 and some relocation of API elements along with refactoring of how the branding component is handled to more easily expose direct control over logo and branding elements.

## catalyst-core v3.1.0

- Adds in the `imageQuality` theme option which allows you to specify an image quality for your images other than the default `50`. Values between 0 - 100 will work.
- TO DO: Needs additional documentation updates

## catalyst-header-side v2.0.0

- **Breaking Change**: This is a visually breaking change. Added support for dropdowns that function as toggles, instead of the pure CSS on hover behaviour that was there before. I also adjusted the default text alignment to be left as this is more expected. You can nudge it back to the centre using variants.

```js
variants: {
    navUl: {
      width: "100%",
      alignItems: ["center", null, "center", null, null],
    },
  },
```

## catalyst-core v3.0.0

- **Breaking Change**: Removed [gatsby-plugin-offline](https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/) from the core theme as there are more considerations and impacts from service workers than should be included in the core theme. This plugin has a lot of power and I would suggest using it on most Gatsby sites but want to leave this as an optional addition versus a forced inclusion in the core theme. If you want to include this in your site you would just add it to your main `gatsby-config.js` file.

## catalyst-header-top v1.5.0

- Adds support for a clickable dropdown button, requires this button variant in your theme-ui file, which is included by default with `catalyst-core` v2.3.1

```js
buttons: {
  dropdown: {
    backgroundColor: "header.background",
    text: "header.text",
    fontWeight: "bold",
    py: 2,
    px: 1,
    ":hover, :focus, :active": {
      textDecoration: "underline",
      textDecorationThickness: "0.125em",
      color: "primary",
    },
  },
},
```

## catalyst-sanity v4.0.0, catalyst-bery v2.0.0, catalyst-hydrogen v.4.0.0

- **BREAKING CHANGE:** In order to support split links properly in the header components I needed to update the schema coming from your SANITY studio. Unfortunately this means you also need to update your schema and re-deploy the graphQL schema.

- Copy and paste `sanity-studio/schema/menuLinks.js` from any current SANITY based starter into your existing studio. Update the location field in your studio for the menu links. The default behaviour is to have the links on the right but now it supports handling them on the left as well.

- Redeploy the graphql schema with the command `sanity graphql deploy`

## catalyst-core v2.3.0 and catalyst-header-top v1.4.0

- Adds support for split links with a fallback for displaying the links in their default location on the right. This is a non-breaking change for MDX based themes. Detail above about breaking change for SANITY based themes.
- You can now add a `location: "left"` or `location: "right"` key value pair in the menuLinks array within `gatsby-config.js` to specify the location of the menu links. Take a look at `gatsby-starter-catalyst` for an example.

## catalyst-core v2.2.0

- Moved the schema customization from the starters to the core theme, requires gatsby ^2.24.58
- Removed `gatsby-node.js` from all of the starters
- Minor package bumps across all packages due to the new required min version of gatsby

## catalyst-header-bigtop v1.0

- version bump to bring this in-line with other headers as v1.0 due to stability. No breaking changes. This should have been bumped to v1.0 when `gatsby-theme-catalyst-helium` was released however I forgot to bump the version.

## catalyst-sanity v3.2.0

- Adds support for the image prop to be used in the Seo component with SANITY.io. You can see an example of this in the `post-template.js` component within `gatsby-theme-catalyst-bery`. You pass it the root image node and it will automatically seek out the proper url and sizing. E.g. if your image node was called `socialImage` you would do something like this:

```jsx
<Seo title={post.title} description={post.excerpt} image={post.socialImage} />
```

## catalyst-helium, catalyst-lithium v 2.1.0

- Added a better default post footers

## catalyst-blog v 2.5.0

- Fixed order of next and previous blog posts

## catalyst-sanity v3.1.0

- Fixed the order of next and previous blog posts

## catalyst-sanity and catalyst-hydrogen v3.0.0

- **Breaking:** Added the ability to have categories by default in SANITY based themes. This required the addition of a category entry to the GraphQL schema which will cause builds to fail when upgrading without updating your sanity schema.
  - Add `category.js` to your schema, you can copy the file from `gatsby-starter-catalyst-sanity/sanity-studio/schemas/category.js` to your schemas directory. Import this and include it in `sanity-studio/schema.js`. More details are in the migrating docs.
  - Run `sanity graphql deploy` to redploy your schema
- Added the ability to have more granular control over the post path and project path, so the ability to set post path as independent from the post list path. E.g. your posts may be at www.sitename.com/posts/blog-post but your post list might be on your home page at www.sitename.com/. This adds a new set of theme options, `sanityPostListPath` and `sanityProjectListPath`.
- Added support for next and previous post links

## catalyst-core v2.0.0 and others

- **Breaking**: This is a visually breaking change affecting dark mode. The `baseTheme` which is exported from `gatsby-theme-catalyst-core` included a colors object which defined a dark mode by default. The problem with this is that it meant dark mode would be used on all sites that merged this theme regardless of whether they wanted dark mode or not. Basically it made it tricky to turn off dark mode. The colors object in the base theme was modified so that there is no dark mode by default and then the colors objects in the starters were updated to include the color mode properly. See the [migrating](https://www.gatsbycatalyst.com/docs/migrating) docs for more detail and examples.

- This will particularly affect `gatsby-theme-catalyst-helium` as your dark mode was being merged in. Ensure that your dark mode colors object located at `src/gatsby-plugin-theme-ui/index.js` looks similar to this:

```js
dark: {
  background: baseColors.gray[9],
  text: baseColors.gray[1],
  textGray: "#9f9f9f",
  primary: "#e6da00",
  secondary: "#9933CC",
  muted: "#1a2431",
  accent: "#363636",
  link: "#e6da00",
  header: {
    background: "transparent",
    text: baseColors.gray[1],
    textOpen: baseColors.gray[1],
    backgroundOpen: baseColors.gray[8],
    icons: baseColors.gray[1],
    iconsOpen: baseColors.gray[1],
  },
  footer: {
    background: "transparent",
    text: baseColors.gray[1],
    links: baseColors.gray[1],
    icons: baseColors.gray[1],
  },
},
```

- This required bumping most other theme versions to v2.0.0 as well, no other breaking changes were introduced.

## catalyst-sanity v2.0.0

- **Breaking**: Removed and simplified the base queries and base studio setup. Removed the "featuredImage" field (which were never being queried anyways). If you were relying on these base queries you will likely need to update the queries, for example `_rawExcerpt` is not just `excerpt`. This is a quick fix but is technically a breaking change which requires the version bump.

- Added @sanity/code-input. Syntax highlighting is handled by Prism with a default theme passed in via code.js serializer. This does pick up style changes from Theme-UI but not the prism theme. The theme for syntax highlighting would need to be set using component shadowing.

- Excerpts are now generated automatically for blog posts and for projects which removes the need for an "excerpt" field.

- Reading time is now generated automatically for blog posts and projects

## catalyst-core v1.3.0

- Added `useKatex` theme option to allow enabling `gatsby-remark-katex` in the themes for prettier math equations. Katex has specific CSS that it needs loaded. This CSS is loaded conditionally in the Seo component (which is really `react-helmet`), so you need to be calling the Seo component in the template/page you are using for the math equations to render properly. This would only be an issue in more custom work with complex component shadowing - you would have the Seo component on every page of your site in most cases.

- This trigged minor version bumps for all other affected themes and starters, e.g. `gatsby-theme-catalyst-helium` includes this as of v1.1.0

## catalyst-blog v2.4.0

- Added in support for categories and tags in `featuredImageCaption` to the blog frontmatter to be used as a caption for the featured images if desired, optional.

## catalyst-blog v2.3.0

- Added in support for categories and tags in frontmatter

## catalyst-blog v2.2.0

- Added in rss feed to the blog which is built automatically
- Added in config option, `rssTitle` to specify the feed title

## catalyst-core v1.2.0 and accompanying minor versions for other themes

- Updated all relevant dependencies

## catalyst-blog v2.0.0

The difference between v1.0 and v2.0 is that v2.0 takes a simplified approach and provides much more barebones blog components for easier shadowing and customization. Basically there is less you need to undo in order to customize this for yourself. This required some breaking changes to implement hence the version bump from v1.0 to v2.0. There will eventually be a new theme which provides more styled and production ready visual design.

- Added socialImage field to frontmatter which allows you to specify the social image used in places like Twitter.
- Added a postType field to frontmatter which allows you to define custom post types, e.g. "featured" or "photo" and conditionally give them a different layout
- Add subTitle field which gives you an option for a "deck" or subtitle via frontmatter.
- Reduced the required frontmatter fields to title and date. This gives greater flexibility in what frontmatter fields you are using. Previously it required a featuredImage which was not good developer experience

If you are wanting to implement styles on your blog but retain full control, look at how `gatsby-theme-catalyst-helium` handles this through component shadowing. You can also see an example in my personal site if you look at the component shadowing in there, [https://github.com/ehowey/erichoweydev](https://github.com/ehowey/erichoweydev).

## catalyst-core v1.1.0

- Added additional remark plugins and documentation about these plugins in the docs for the core theme. No breaking changes. Now supports relative image paths, and external links from markdown target "\_blank"
- Added a theme option `remarkImagesWidth` to the core theme to allow for customization of the max width generated by `gatsby-remark-images`. The default value remains 1440px.
- Added canonical links to the Seo component, these are generated automatically based on the page path - this _assumes_ that you have only one version of a page. For example your blog post is only at www.mysite.com/blog/my-post/. You would need to develop a more complex solution if you have pages at multiple slugs in your site. See [https://joshwcomeau.com/gatsby/seo-friendly-sitemap/](https://joshwcomeau.com/gatsby/seo-friendly-sitemap/) for more details on doing this for more complex sites.

## v1.0.0

**Breaking changes:**

- Move your theme-ui file from `src/gatsby-theme-catalyst-core/theme.js` -> `src/gatsby-plugin-theme-ui/index.js`. No other change should be needed. This was done to be more in line with recommended best practice. There is now a 'base theme' for Theme-UI which is exported from `gatsby-theme-catalyst-core`. You can use this to write smaller and more condensed themes in the starters using the following syntax:

```js
import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  // Modifications to the base theme go here. This is an example changing colors and using variants to change your navigation links. Uncomment the code below to see what happens.
})
```

- Depreciated `gatsby-theme-catalyst-writer` in favor of `gatsby-theme-catalyst-hydrogen`. If you were using the writer theme it will continue to work, and should work for a long time to come. If you want to migrate to hydrogen then it should be possible with a little effort as the expected data structures from SANITY were mainly unchanged.

### Other notable changes

- This is technically not a breaking change but it could noticeably change your sites appearance. Base navigation styles were simplified in the structural themes and then added back in for the presentational themes using variants in the theme-ui file. You can see an example of this is `gatsby-theme-catalyst-hydrogen` if you would like to see how to do it on your site, look in `gatsby-theme-catalyst-hydrogen/src/gatsby-plugin-theme-ui/index.js`.

- Moved margin on from `contentContainer` to `<main>` to better reflect best practice. Spacing remains the same however is just on another element.

- Added `gatsby-theme-catalyst-sanity` which acts as a "core" theme for additional SANITY.io integrations. This is functioning, with some ongoing improvements needed. Additional documentation will be coming.

- Added `gatsby-theme-catalyst-hydrogen` this is almost identical to the old writer theme but optimized to make use of `gatsby-theme-catalyst-sanity` and better abstract complexity. The way it is set up now this has created a better seperation of data and presentation layers which will enable further improvements and better extendability.

## catalyst-core v0.25.0, header-top v0.4.0, header-side v0.4.0

Depreciated `isMobile` and `mobileMenuBreakpoint`. This is a non-breaking change now but will be fully removed come v1.0. The main problem was a flash of unstyled content due to javascript parsing after CSS and pageload. While it was a nice feature the performance hit was not worth it. Now the mobile menu shows on the second breakpoint, 768px by default. Docs were updated as well.

## catalyst-core v0.24.0

- Adds skip nav function based on [https://www.gatsbyjs.com/blog/2020-02-10-accessible-client-side-routing-improvements/#reach-skip-nav](https://www.gatsbyjs.com/blog/2020-02-10-accessible-client-side-routing-improvements/#reach-skip-nav)

## catalyst-core v0.23.0

Changes to allow support for sub-menus in `gatsby-node.js`

## catalyst-header-top v0.3.0

- Adds the ability to use sub-menus (dropdowns) on internal site links, see `gatsby-starter-catalyst` for an example. There is an example config in the docs and in this starter.

## catalyst-writer v0.8.0

- More robust queries for pages, should prevent an error that was occuring for pages in SANITY if multiples were created by accident

## catalyst-blog v0.8.0

- Revised posts-list query using `nodes` instead of `edges->node`
- Added in `timeToRead` as an available query field on posts to display reading time in a blog

## catalyst-core v0.22.0

- Added support for [gatsby-mdx-embed](https://www.gatsbyjs.com/packages/@pauliescanlon/gatsby-mdx-embed/)

## catalyst-writer v0.7.0

- Added in settings and metadata to SANITY.io schema, this allows all of those fields to be controlled via the SANITY studio instead of gatsby-config.js. For example fields like `title`, `description`, the site logo, default social media image, etc.
- Shadowed `use-site-metadata.js` from the core theme to implement this, so instead it now draws from SANITY, and not gatsby-config.js

## catalyst-footer v0.2.0

- Content is now justified based on `footerContentLocation` setting from `gatsby-theme-catalyst-core`, allows for more granular control of the content location in the footer. Default setting is "left", also works with "right" and "center".

## catalyst-core v0.21.0

- Removed `twitter` field from `gatsby-config.js`, this is now automatically retrieved from the `socialLinks` array

## catalyst-core v0.20.0

- Reworked layout components
- Layout is provided by gatsby-plugin-mdx now instead of wrapPageElemet
- Getting ready for theme-ui v0.3, removed `{ Layout }` import
- Added displaySiteTitleMobile, displaySiteLogoMobile, isHeaderSideLeft config options, see docs
- Removed `contentWidth` setting, this was a confusing double setting. Use `maxContentWidth` instead.

## catalyst-footer v0.1.0

- Renamed from `catalyst-footer-basic`, better naming
- Footer repositioned to center of page

## catalyst-header-top v0.1.0

- Renamed from `catalyst-header-basic`, better naming
- Removed some unecessary CSS

## catalyst-header-side v0.1.0

- New theme entirely, implements a sidebar style header, defaults to left
