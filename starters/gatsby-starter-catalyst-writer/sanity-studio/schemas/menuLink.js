export default {
  title: "Menu Link",
  name: "menuLink",
  type: "document",
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
    },
    {
      title: "Link type",
      name: "type",
      type: "string",
      description:
        "Links within your site should be internal, anchor links are more for single page sites",
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
