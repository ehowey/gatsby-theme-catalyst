# Change Log

## 7.0.0

### Major Changes

- b56118b0: **BREAKING: Only affects sanity-based themes and starters**. This adds a more user friendly navigation link and social link structure in the sanity content studio. Due to this change in the content studio the sanity based themes all required some minor breaking changes in the studio schemas to support this improved ux. This is better for users over the long term, sorry for a breaking change!

  **Migrating:** If you are not using SANITY, you can just upgrade. If you are using SANITY please see the [v7 migration guide](https://www.gatsbycatalyst.com/docs/migrating/). Migration will involve copy and pasting some new schemas into your sanity schema folder and then re-entering the navigation links and social links. As a result you will be able to drag/drop the order of navigation links and social links with a cleaner UI for content editors.

## 6.0.0

### Patch Changes

- d4969468: Remove loading=eager prop as this is causing issues with blurry images using gatsby-plugin-image
- 1939ad03: Update internal dependencies
- 1d2e3b90: Update Gatsby to v3.4 and Theme-UI to v0.7.5. Updated additional packages as necessary.
- 74b85ddc: Fix font sizing for cards in gatsby-theme-catalyst-hydrogen, other small visual improvements to the cards
- 880d66fa: Update Gatsby to v3.5. Remove Lerna as this is no longer needed with Changesets handling the publishing.
- 3f8071db: Updated to Theme-UI v0.8.4 and fixes all necessary styles that were affected by moving the root styles from the body element to the root element. This may affect your text sizing if you are using this in an existing site.
- c76af932: Adds support for `published: true` boolean to MDX frontmatter. This flag is now required for blog posts to be published. Prevents accidentally publishing blog posts.

## 6.0.0-beta.13

### Patch Changes

- 74b85ddc: Fix font sizing for cards in gatsby-theme-catalyst-hydrogen, other small visual improvements to the cards

## 6.0.0-beta.12

### Patch Changes

- 1939ad03: Update internal dependencies

## 6.0.0-beta.11

### Patch Changes

- 880d66fa: Update Gatsby to v3.5. Remove Lerna as this is no longer needed with Changesets handling the publishing.

## 6.0.0-beta.10

### Patch Changes

- c76af932: Adds support for `published: true` boolean to MDX frontmatter. This flag is now required for blog posts to be published. Prevents accidentally publishing blog posts.

## 6.0.0-beta.9

### Patch Changes

- 3f8071db: Updated to Theme-UI v0.8.4 and fixes all necessary styles that were affected by moving the root styles from the body element to the root element. This may affect your text sizing if you are using this in an existing site.

## 6.0.0-beta.8

### Patch Changes

- 1d2e3b90: Update Gatsby to v3.4 and Theme-UI to v0.7.5. Updated additional packages as necessary.

## 6.0.0-beta.7

### Patch Changes

- d4969468: Remove loading=eager prop as this is causing issues with blurry images using gatsby-plugin-image
