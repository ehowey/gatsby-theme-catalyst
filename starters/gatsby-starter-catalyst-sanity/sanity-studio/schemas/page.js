export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
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
      title: "Body",
      type: "blockContent",
    },
  ],
}
