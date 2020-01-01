# Gatsby Theme Catalyst Writer

This is a full-featured theme that ties together the core theme, header and footer themes and then uses this as a basis to create a complete website. The theme relies on data from [SANITY.io](https://www.sanity.io/) and includes a customized content studio for the CMS.

**Additional Documentation**

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

WIP

## Walkthrough

Setting this up is a bit more involved of a process because of the tight integration of SANITY.io and the theme. The following steps should work, if you run into problems feel free to post an issue or contact me and I will try to help.

### 1. Install the starter

`gatsby new catalyst-writer https://github.com/ehowey/gatsby-starter-catalyst-writer`

### 2. Install SANITY.io, sign up, and initialize the content studio and graphql layer

WIP

### 3. Add in your environment variables

WIP

### 4. Create some basic content in sanity-studio for your site

It will be easier for you if you put at least some minimal demo content into the site initially. It will work with nothing added in however it will also look very odd and unfinished without at least some basic content. Just toss in some Lorem Ipsum and Unsplash images to get a feel for the site.

### 5. Update gatsby-config.js

SANITY.io is used for the actual content however `gatsby-config.js` is still used to control things like site title, author, description, etc. Go ahead and modify these for your website. Again this step if optional but just takes a few minutes to quickly go in and add in the correct information.

### 6. Run Gatsby

`gatsby develop`

Congratulations! You should be looking at a working draft of your new website!

### 7. Branding, colors and fonts

WIP

### 8. Customizing the hero component

WIP

### 9. Deploy to your hosting platform of choice

When your site is ready to go you can deploy it to your hosting platform of choice. Don't forget to also set your environment variables up with your host otherwise the production build will fail.
