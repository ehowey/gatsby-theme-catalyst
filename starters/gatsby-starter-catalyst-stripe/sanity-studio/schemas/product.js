export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "active",
      title: "Active?",
      description:
        "Toggle whether the product is active in your store. Inactive products are kept in the database but not displayed on the website.",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured?",
      description: "Toggle whether a product is featured.",
      type: "boolean",
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
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "stock",
      title: "Amount of stock",
      description:
        "If the stock number is 0 then the product will be shown as out of stock.",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "productCategory",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "image",
      title: "Image",
      description: "An image of your product.",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
}
