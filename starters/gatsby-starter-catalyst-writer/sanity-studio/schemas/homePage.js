export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      title: "Hero Title",
      name: "heroTitle",
      type: "string",
    },
    {
      title: "SEO Title",
      description:
        "The title used by search engines in the search results, likely the same as your page title.",
      name: "seoTitle",
      type: "string",
    },
    {
      title: "Hero Text",
      name: "heroText",
      type: "blockContent",
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "figure",
    },
    {
      title: "Featured Logos Title",
      name: "logoTitle",
      type: "string",
    },
    {
      title: "Featured Work Title",
      name: "workTitle",
      type: "string",
    },
    {
      title: "Contact Title",
      name: "contactTitle",
      type: "string",
    },
    {
      title: "Contact Text",
      name: "contactText",
      type: "blockContent",
    },
  ],
}
