module.exports = {
    siteMetadata: {
      title: `Test Title`,
      description: `Test Description`,
      keywords: [`test-keyword-1`, `test-keyword-2`, `test-keyword-3`],
      author: `Test Author`,
      siteUrl: `https://localhost`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
      menuLinks: [
        {
          name: `Test Page 1`,
          link: `/test/1`,
          type: `internal`, //internal or anchor
        },
        {
          name: `Test Page 2`,
          link: `/test/2`,
          type: `internal`, //internal or anchor
        },
      ],
      socialLinks: [
        {
          name: `Email`,
          link: `eric@erichowey.dev`,
          location: `footer`, //Options are "all", "header", "footer"
        },
        {
          name: `Github`,
          link: `https://test`,
          location: `all`, //Options are "all", "header", "footer"
        },
        {
          name: `Twitter`,
          link: `https://test`,
          location: `header`, //Options are "all", "header", "footer"
        },
      ],
    }
}