export default {
  title: "Sub Menu(Drop Down)",
  name: "subMenu",
  type: "object",
  description: "Leave these fields blank if you do not want a drop down menu.",
  fields: [
    {
      title: "Link name",
      name: "name",
      type: "string",
    },
    {
      title: "Link to",
      name: "link",
      type: "url",
      validation: Rule =>
        Rule.uri({
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
    },
  ],
}
