export default {
  name: "author",
  title: "Author",
  type: "document",
  liveEdit: false,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Author Link",
      description:
        "Used as a link with your name, commonly would link to your email or social media of choice.",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto"],
        }),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Optional, not used in every theme or site.",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
}
