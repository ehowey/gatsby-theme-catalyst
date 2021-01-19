export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "active",
      title: "Active",
      description: "Toggle whether the product is active in your store.",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Product name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Product Id",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      description: "An image of your product.",
      type: "image",
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
