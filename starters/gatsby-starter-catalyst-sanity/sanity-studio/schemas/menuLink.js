export default {
  title: "Menu Link",
  name: "menuLink",
  type: "document",
  fields: [
    {
      title: "Link text",
      description: "The text displayed for the navigation link.",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link to",
      description:
        "The relative page link, e.g. '/work'. Can also be an anchor link like '#categories'",
      name: "link",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto"],
        }),
    },
    {
      title: "Link location",
      name: "location",
      type: "string",
      description:
        "Affects the visual location of the links for the top menu bar only. Allows for a 'split' link design. Does not affect some themes.",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link type",
      name: "type",
      type: "string",
      description:
        "Internal links use Gatsby Link to link to other pages, anchor links are for single page sites.",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "Anchor", value: "anchor" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      description: "Use numbers to specify the order on the navigation bar.",
      type: "number",
      validation: (Rule) => Rule.required().integer().positive(),
    },
    {
      title: "Sub Menu (Drop-Down)",
      name: "subMenu",
      description: "Leave blank if you do not want a drop down menu.",
      type: "array",
      of: [{ type: "subMenu" }],
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
