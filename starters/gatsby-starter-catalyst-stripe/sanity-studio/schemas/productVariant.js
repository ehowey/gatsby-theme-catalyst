export default {
  title: "Product Variant",
  name: "productVariant",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description:
        "Used mainly for organization purposes, not visible to the user on the web.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Displayed Variant Name",
      name: "displayedName",
      description:
        "Used for what is visible to user in the selection box, e.g. 'small' or 'red'. On products with a single variant this is not shown.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Id",
      name: "product_id",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Taxable?",
      name: "taxable",
      type: "boolean",
    },
    {
      name: "stock",
      title: "Amount of stock available.",
      description:
        "If the stock number is 0 then the product will be shown as out of stock.",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    // {
    //   title: "Weight in grams",
    //   name: "grams",
    //   type: "number",
    // },
    {
      name: "images",
      title: "Images",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
}
