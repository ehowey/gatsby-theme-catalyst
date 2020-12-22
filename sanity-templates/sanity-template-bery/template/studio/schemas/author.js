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
          scheme: ["https", "http", "mailto"],
        }),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
}
