export default {
  name: "bioPage",
  title: "Bio Page",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "title",
      type: "string",
    },
    {
      name: "topimage",
      title: "Top Image",
      type: "figure",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
}
