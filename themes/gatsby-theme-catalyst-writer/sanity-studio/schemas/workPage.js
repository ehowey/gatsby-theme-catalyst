export default {
  name: "workPage",
  title: "Work Page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      name: "topimage",
      title: "Top Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
