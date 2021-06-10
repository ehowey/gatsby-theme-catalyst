export default {
  title: "Sub Menu(Drop Down)",
  name: "subMenu",
  type: "object",
  description: "Leave these fields blank if you do not want a drop down menu.",
  fields: [
    {
      title: "Link text",
      description: "The text displayed for the navigation link.",
      name: "name",
      type: "string",
    },
    {
      title: "Link to",
      description:
        "The relative page link, e.g. '/work'. Can also be an anchor link like '#categories'",
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
