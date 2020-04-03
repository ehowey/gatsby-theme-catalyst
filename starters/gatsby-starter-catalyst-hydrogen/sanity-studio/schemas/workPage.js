export default {
  name: "workPage",
  title: "Work Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      description: "This will be the link used for your site, e.g. work",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "figure",
    },
    {
      name: "body",
      description:
        "This will appear before your selected work section, leave blank if you want.",
      title: "Body",
      type: "blockContent",
    },
  ],
}
