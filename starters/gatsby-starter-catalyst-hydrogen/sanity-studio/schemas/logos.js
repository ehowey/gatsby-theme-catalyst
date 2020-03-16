export default {
  name: "logos",
  title: "Publisher Logos",
  type: "document",
  fields: [
    {
      title: "Logo",
      name: "logo",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: Rule => Rule.required(),
    },
    {
      title: "Logo Title - Alt Text",
      name: "altText",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Link To",
      name: "link",
      type: "url",
      validation: Rule => Rule.required(),
    },
    {
      title: "Featured on front page?",
      name: "featured",
      type: "boolean",
    },
  ],
}
