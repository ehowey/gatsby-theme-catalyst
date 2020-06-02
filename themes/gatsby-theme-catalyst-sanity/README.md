# Gatsby Theme Catalyst Sanity

**WIP DO NOT USE**

Sibling theme for `gatsby-theme-catalyst-core` which adds a SANITY.io.

**Additional Documentation**

[Read the docs on Github](https://github.com/ehowey/gatsby-theme-catalyst)

**Demos:**

- [gatsby-starter-catalyst-sanity](https://gatsby-starter-catalyst-sanity.netlify.app/)

## About Gatsby Theme Catalyst

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinionated set of integrated themes and starters that can be used to accelerate your next Gatsby project. The vision is for one "core" theme in which most dependencies and components are contained followed by progressively more styled and refined child themes and starters. These themes rely heavily on [Theme-UI](https://theme-ui.com/) and [MDX](https://mdxjs.com/getting-started/gatsby/).

## Theme Options

| Option                   | Values  | Description                                                                                                                                |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| sanityProjectId          | String  | Required, Sanity project ID                                                                                                                |
| sanityDataset            | String  | Defaults to "production", change to reflect the dataset name you are using in Sanity                                                       |
| sanityToken              | String  | Defaults to null, should only be used with env variables for security purposes.                                                            |
| sanityWatchMode          | Boolean | Defaults to true, toggle for watch mode                                                                                                    |
| sanityOverlayDrafts      | Boolean | Defaults to false, toggle for live previews, a token and private dataset is required.                                                      |
| sanityCreatePages        | Boolean | Defaults to true, toggle to turn on/off page generation from SANITY.io.                                                                    |
| sanityCreatePosts        | Boolean | Defaults to true, toggle to turn on/off blog post page generation from SANITY.io.                                                          |
| sanityCreatePostsList    | Boolean | Defaults to true, toggle to turn on/off blog post list generation from SANITY.io.                                                          |
| sanityCreateProjects     | Boolean | Defaults to true, toggle to turn on/off project page generation from SANITY.io.                                                            |
| sanityCreateProjectsList | Boolean | Defaults to true, toggle to turn on/off project list generation from SANITY.io.                                                            |
| sanityPostPath           | String  | Defaults to "/posts", is the path for the posts index and also before posts, e.g. site.com/posts/post-1.                                   |
| sanityProjectPath        | String  | Defaults to "/projects", is the path for the projects index and also before projects, e.g. site.com/projects/post-1.                       |
| useSanityTheme           | Boolean | Experimental. Enables merging the theme-ui theme specification from SANITY.io allowing use of a GUI to change the site theme, e.g. colors. |
