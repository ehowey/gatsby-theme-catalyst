# Change Log

All notable changes to this project will be documented in this file.

## catalyst-writer v0.8.0

- More robust queries for pages, should prevent an error that was occuring for pages in SANITY if multiples were created by accident

## catalyst-blog v0.8.0

- Revised posts-list query using `nodes` instead of `edges->node`
- Added in `timeToRead` as an available query field on posts to display reading time in a blog

## catalyst-core v0.22.0

- Added support for [gatsby-mdx-embed](https://www.gatsbyjs.org/packages/@pauliescanlon/gatsby-mdx-embed/)

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
