export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      title: "Hero Title",
      name: "heroTitle",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "SEO Title",
      description:
        "The title used by search engines in the search results, likely the same as your page title.",
      name: "seoTitle",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Hero Text",
      name: "heroText",
      type: "blockContent",
      validation: Rule => Rule.required(),
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "figure",
      validation: Rule => Rule.required(),
    },
    {
      title: "Featured Logos Title",
      name: "logoTitle",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Featured Work Title",
      name: "workTitle",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Contact Title",
      name: "contactTitle",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Contact Text",
      name: "contactText",
      type: "blockContent",
      validation: Rule => Rule.required(),
    },
  ],
}
