export default {
  title: "Social Link",
  name: "socialLink",
  type: "document",
  fields: [
    {
      title: "Social Media Provider",
      name: "name",
      description:
        "The name of the social media provider, e.g. Facebook or Instagram, email or e-mail also works. Icons are automatically sourced at build time. If an icon doesn't render please submit an issue.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link to",
      name: "link",
      description: "The full link to your social media page or profile.",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto"],
        }),
    },
  ],
}
