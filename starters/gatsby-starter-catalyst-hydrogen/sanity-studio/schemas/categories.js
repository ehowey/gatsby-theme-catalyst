export default {
  name: "categories",
  title: "Work Categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      description: "Use numbers to specify the order e.g. 1 is ordered first",
      type: "number",
      validation: (Rule) => Rule.required().integer().positive(),
    },
  ],
  orderings: [
    {
      title: "Web Order",
      name: "webOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
}
