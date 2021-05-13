# Change Log

## 6.0.0-beta.11

### Patch Changes

- 880d66fa: Update Gatsby to v3.5. Remove Lerna as this is no longer needed with Changesets handling the publishing.
- Updated dependencies [880d66fa]
  - gatsby-theme-catalyst-hydrogen@6.0.0-beta.11

## 6.0.0-beta.10

### Patch Changes

- c76af932: Adds support for `published: true` boolean to MDX frontmatter. This flag is now required for blog posts to be published. Prevents accidentally publishing blog posts.
- Updated dependencies [c76af932]
  - gatsby-theme-catalyst-hydrogen@6.0.0-beta.10

## 6.0.0-beta.9

### Patch Changes

- 3f8071db: Updated to Theme-UI v0.8.4 and fixes all necessary styles that were affected by moving the root styles from the body element to the root element. This may affect your text sizing if you are using this in an existing site.
- Updated dependencies [3f8071db]
  - gatsby-theme-catalyst-hydrogen@6.0.0-beta.9

## 6.0.0-beta.8

### Patch Changes

- 1d2e3b90: Update Gatsby to v3.4 and Theme-UI to v0.7.5. Updated additional packages as necessary.
- Updated dependencies [1d2e3b90]
  - gatsby-theme-catalyst-hydrogen@6.0.0-beta.8

## 6.0.0-beta.7

### Patch Changes

- d4969468: Remove loading=eager prop as this is causing issues with blurry images using gatsby-plugin-image
- Updated dependencies [d4969468]
  - gatsby-theme-catalyst-hydrogen@6.0.0-beta.7
