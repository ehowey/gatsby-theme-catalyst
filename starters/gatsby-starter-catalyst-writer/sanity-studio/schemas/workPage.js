export default {
  name: "workPage",
  title: "Work Page",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "title",
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
      name: "topimage",
      title: "Top Image",
      type: "figure",
    },
  ],
}
