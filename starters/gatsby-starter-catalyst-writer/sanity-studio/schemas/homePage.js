export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      title: "Hero Title",
      name: "heroTitle",
      type: "string",
    },
    {
      title: "Hero Text",
      name: "heroText",
      type: "text",
      rows: 4,
    },
    {
      title: "Display text in Hero?",
      name: "displayHeroText",
      type: "boolean",
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "figure",
    },
    {
      title: "Logo Title",
      name: "logoTitle",
      type: "string",
    },
    {
      title: "Featured Title",
      name: "featuredTitle",
      type: "string",
    },
    {
      title: "Contact Title",
      name: "contactTitle",
      type: "string",
    },
    {
      title: "Contact Text",
      name: "contactText",
      type: "blockContent",
    },
  ],
}
