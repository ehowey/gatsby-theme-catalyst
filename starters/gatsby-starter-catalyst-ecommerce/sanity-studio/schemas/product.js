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
    {
      name: "id",
      title: "Product Id",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
}
