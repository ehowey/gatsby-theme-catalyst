export default {
  name: "categories",
  title: "Work Categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "order",
      title: "Order",
      description: "Use numbers to specify the order e.g. 1 is ordered first",
      type: "number"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ],
  orderings: [
    {
      title: "Web Order",
      name: "webOrder",
      by: [{ field: "order", direction: "asc" }]
    }
  ]
};
