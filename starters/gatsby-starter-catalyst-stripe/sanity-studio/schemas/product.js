export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    // How to handle sizes/colors/variants of a product.  E.g. red, green and blue glasses? These are all three different products but for a content editor they are also the "same" product.
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
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Variants",
      name: "variants",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "reference",
          to: [
            {
              type: "productVariant",
            },
          ],
        },
      ],
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
  ],
}
