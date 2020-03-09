export default {
  title: "Menu Link",
  name: "menuLink",
  type: "document",
  description:
    "This theme automatically generates pages at /bio, /work, and /contact. You need to include at least these links.",
  fields: [
    {
      title: "Link name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Link to",
      name: "link",
      type: "url",
      validation: Rule =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
    {
      title: "Link type",
      name: "type",
      type: "string",
      description:
        "Links within your site should be internal, anchor links are for single page sites.",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "Anchor", value: "anchor" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      description:
        "Use numbers to specify the order on the nav bar, left to right, top to bottom.",
      type: "number",
      validation: Rule =>
        Rule.required()
          .integer()
          .positive(),
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
