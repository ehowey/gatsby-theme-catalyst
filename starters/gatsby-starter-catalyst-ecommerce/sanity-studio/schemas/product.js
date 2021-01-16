export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
}
