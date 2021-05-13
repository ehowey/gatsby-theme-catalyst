# Change Log

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
