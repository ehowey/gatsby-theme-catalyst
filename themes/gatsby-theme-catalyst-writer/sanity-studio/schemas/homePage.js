export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "topimage",
      title: "Top Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ]
};
