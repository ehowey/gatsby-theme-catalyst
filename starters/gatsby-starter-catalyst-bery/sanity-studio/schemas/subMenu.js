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
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
  ],
}
