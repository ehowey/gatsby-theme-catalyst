export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Your website title, likely going to be your name.",
    },
    {
      name: "description",
      type: "text",
      rows: "3",
      title: "Description",
      description:
        "Describe your portfolio for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description:
        "Add keywords for search engines that describes your portfolio.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "string",
      title: "Author",
      description: "Your name, used in some social sharing situations.",
    },
    {
      title: "Logo",
      name: "logo",
      type: "figure",
      description:
        "By default the logo is not activated in this starter but could easily but used with the flags displaySiteLogo and displaySiteLogoMobile",
    },
    {
      title: "Default Social Sharing Image",
      name: "seoImage",
      type: "figure",
      description:
        "Used as a default sharing image for places like Twitter and Facebook when sharing a link to your website, an image of you is likely a good option.",
    },
    {
      name: "siteUrl",
      type: "url",
      title: "Site URL",
      description:
        "Used for sitemap and robots file, should be the link to your finished website, e.g. https://www.erichowey.dev",
    },
  ],
}
