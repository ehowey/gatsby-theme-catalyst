export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      rows: "4",
      title: "Description",
      description:
        "Describe your portfolio for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your portfolio.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      name: "twitter",
      type: "string",
      title: "Twitter username",
      description:
        "Include only the @name portion, e.g. @erchwy, used for creating Twitter social sharing cards",
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
