# Gatsby-Theme-Catalyst-Sanity

This theme adds a data layer for SANITY.io on top of `gatsby-theme-catalyst-core` via component shadowing. This is used as a "core" theme for SANITY.io and is designed to be modified and shadowed itself in the final site. You can see an example of this theme stacked and further customized with [gatsby-theme-catalyst-bery](https://gatsby-starter-catalyst-bery.netlify.app/).

## Demos

- [gatsby-starter-catalyst-sanity](https://gatsby-starter-catalyst-sanity.netlify.app/)

## Catalyzing Start

`gatsby new catalyst-sanity https://github.com/ehowey/gatsby-starter-catalyst-sanity`

## Theme Options

| Option                        | Values  | Description                                                                               |
| ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| sanityProjectId               | String  | Required, Sanity project ID                                                               |
| sanityDataset                 | String  | Defaults to "production", change to reflect the dataset name you are using in Sanity      |
| sanityToken                   | String  | Defaults to null, should only be used with env variables for security purposes.           |
| sanityWatchMode               | Boolean | Defaults to true, toggle for watch mode                                                   |
| sanityOverlayDrafts           | Boolean | Defaults to false, toggle for live previews, a token and private dataset is required.     |
| sanityCreatePages             | Boolean | Defaults to true, toggle to turn on/off page generation from SANITY.io.                   |
| sanityCreatePosts             | Boolean | Defaults to true, toggle to turn on/off blog post page generation from SANITY.io.         |
| sanityCreateCategories        | Boolean | Defaults to true, toggle to turn on/off category page generation from SANITY.io.          |
| sanityCreatePostsList         | Boolean | Defaults to true, toggle to turn on/off blog post list generation from SANITY.io.         |
| sanityCreateProjects          | Boolean | Defaults to true, toggle to turn on/off project page generation from SANITY.io.           |
| sanityCreateProjectsList      | Boolean | Defaults to true, toggle to turn on/off project list generation from SANITY.io.           |
| sanityPostPath                | String  | Defaults to "/posts", is the path for before posts, e.g. site.com/posts/post-1.           |
| sanityPostListPath            | String  | Defaults to "/posts", is the path for the posts list, e.g. site.com/posts/.               |
| sanityProjectPath             | String  | Defaults to "/projects", is the path for before projects, e.g. site.com/projects/post-1.  |
| sanityProjectListPath         | String  | Defaults to "/projects", is the path for the projects list page, e.g. site.com/projects/. |
| sanityPostListTitle           | String  | Defaults to "Posts", is title for the posts list page.                                    |
| sanityProjectListTitle        | String  | Defaults to "Projects", is title for the projects list page.                              |
| sanityDisplayPostListTitle    | Boolean | Defaults to true, toggle to turn on/off the post list title.io.                           |
| sanityDisplayProjectListTitle | Boolean | Defaults to true, toggle to turn on/off the project list title.io.                        |

## Sanity Studio

There is a custom [sanity studio](https://www.sanity.io/docs/sanity-studio) and data structure located in the starter. This studio should be used as a "base" studio and built on top of for custom content. You can use the [desk structure](https://www.sanity.io/docs/structure-builder-introduction) to control whether certain actions are visible to the user or not - e.g. don't want them to see the "Projects" folder, just hide it via the desk structure.

This is a compromised solution, it makes iterating and building a site with SANITY.io as the backend faster and easier - but it locks you in to a base set of data the themes require to successfully build. It is a tradeoff but one that is worth it for a lot of use cases.

## Shadowed components

`useSiteMetadata.js`: This is heart of what allows this theme to function as this hook is used throughout all of the themes to source data like site title, logo, etc. Changing the source form `gatsby-config` to SANITY.io allows all of these components to be updated without having to actual change their code.

`seo.js`: This is shadowed to ensure that social images are sourced correctly.

## gatsby-node.js

There is quite a bit going on in `gatsby-node.js` to manage the createPages api from Gatsby. Theme options are used to conditionally build pages in the build process - this means that if you want a blog on your site the "infrastructure" is there in gatsby-node to create the pages but can be turned on/off based on whether you need this feature. This results in some warnings in the build process.

`gatsby-node.js` is also used to automatically create excerpts and reading time for both projects and posts, this relies on an extended base studio configuration as it looks for the "body" field to create the excerpts. This implementation is based on [gatsby-transformer-portable-text](https://www.gatsbyjs.com/packages/gatsby-transform-portable-text/).

## Query components and template components

Queries and templates are separated to isolate visual components from data components. This is best practice in a Gatsby theme and means that in most cases you can just modify the visual layer through component shadowing and leave the data alone letting you concentrate on design.

These are located at `src/components/queries/` and `src/components/templates/`.

You can see an example of this in use with `gatsby-theme-catalyst-hydrogen`.
