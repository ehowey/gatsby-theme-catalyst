export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      rows: "3",
      title: "Description",
      description: "Describe your website for search engines and social media.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description:
        "Add keywords for search engines that describes your website.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      type: "string",
      title: "Site Author",
      description: "Your name, or developers name.",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo",
      name: "logo",
      type: "figure",
      description:
        "Your website logo, whether this is displayed can be controlled by feature flags in gatsby-theme-catalyst-core.",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Default Social Sharing Image",
      name: "seoImage",
      type: "figure",
      description:
        "The default sharing image for places like Twitter and Facebook when sharing a link to your website.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "siteUrl",
      type: "url",
      title: "Site URL",
      description:
        "The root url of your website, e.g. https://www.erichowey.dev",
      validation: (Rule) => Rule.required(),
    },
  ],
}
