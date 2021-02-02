export default {
  name: "productCategory",
  type: "document",
  title: "Product Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        // add a button to generate slug from the title field
        source: "title",
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
}
