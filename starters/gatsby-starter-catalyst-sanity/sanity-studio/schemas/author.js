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
    },
    {
      name: "link",
      title: "Author Link",
      description:
        "Used as a link with author name, commonly would link to your email or social media of choice.",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
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
