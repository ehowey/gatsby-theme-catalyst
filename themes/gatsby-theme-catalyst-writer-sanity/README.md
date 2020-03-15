# Gatsby Theme Catalyst Writer

This is a full-featured theme that ties together the core theme, header and footer themes and then uses this as a basis to create a complete website. The theme relies on data from [SANITY.io](https://www.sanity.io/) and includes a customized content studio for the CMS.

**Additional Documentation**

[Getting started with gatsby-theme-catalyst-writer](https://www.erichowey.dev/writing/getting-started-with-gatsby-theme-catalyst-writer/)

[Read the docs on Github](https://github.com/ehowey/gatsby-theme-catalyst)

**Demos:**

- [gatsby-starter-catalyst-writer](https://gatsby-starter-catalyst-writer.netlify.com/)
- [www.briannasharpe.com](https://www.briannasharpe.com)

**Catalyzing Start**

```sh
# create a new Gatsby site using the catalyst writer starter site
gatsby new catalyst-writer https://github.com/ehowey/gatsby-starter-catalyst-writer
```

## Theme options

These theme options are used to properly access images and data from Sanity. I would recommend just setting these up in environment variables as you will need an environment variables file to store your access token anyways.

| Option          | Values | Description                                                                          |
| --------------- | ------ | ------------------------------------------------------------------------------------ |
| sanityDataset   | String | Defaults to "production", change to reflect the dataset name you are using in Sanity |
| sanityProjectID | String | Required, Sanity project ID                                                          |

Example config:

```
{
  resolve: `gatsby-theme-catalyst-writer`,
  options: {
    sanityProjectID: process.env.SANITY_PROJECT_ID,
    sanityDataset: process.env.SANITY_DATASET,
  },
},
```

**Environment Variable**

You can read the [Gatsby docs about environment variables](https://www.gatsbyjs.org/docs/environment-variables/) which may be helpful.

At the top of your gatsby-config.js file you will want the following, `require("dotenv").config()`

Then in your site you can create a `.env` file in your main site directory with the following information. You do not want to commit this file to git as the token should remain private.

```
SANITY_PROJECT_ID = utcr8kb1
SANITY_DATASET = production
SANITY_TOKEN = skRE6nh0PRCFP4juyGzMC7gvlop (actual token is much longer)
```
