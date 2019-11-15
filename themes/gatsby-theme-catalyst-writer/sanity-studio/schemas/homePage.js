export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      title: "Hero Title",
      name: "heroTitle",
      type: "string"
    },
    {
      title: "Hero Text",
      name: "heroText",
      type: "text",
      rows: 4
    },
    {
      title: "Display text in Hero?",
      name: "displayHeroText",
      type: "boolean"
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
