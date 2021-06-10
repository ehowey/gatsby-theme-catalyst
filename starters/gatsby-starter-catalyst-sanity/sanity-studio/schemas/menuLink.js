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
      title: "Sub Menu (Drop-Down)",
      name: "subMenu",
      description: "Leave blank if you do not want a drop down menu.",
      type: "array",
      of: [{ type: "subMenu" }],
    },
  ],
}
