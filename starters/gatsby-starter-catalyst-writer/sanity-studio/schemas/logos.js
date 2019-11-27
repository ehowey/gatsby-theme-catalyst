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
        hotspot: true // <-- Defaults to false
      }
    },
    {
      title: "Logo Title - Alt Text",
      name: "altText",
      type: "string"
    },
    {
      title: "Link To",
      name: "link",
      type: "url"
    },
    {
      title: "Featured on front page?",
      name: "featured",
      type: "boolean"
    }
  ]
};
