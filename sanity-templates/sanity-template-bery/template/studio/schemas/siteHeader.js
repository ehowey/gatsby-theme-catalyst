export default {
  name: "siteHeader",
  title: "Site Header",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Used as an avatar image in the header.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      title: "Short Bio",
      type: "headerBioContent",
      rows: 3,
      description:
        "Suggested characters of between 80 - 200, imagine a Twitter bio length.",
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
