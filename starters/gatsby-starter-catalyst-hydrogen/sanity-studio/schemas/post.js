export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Publication Date",
      type: "date",
      options: {
        dateFormat: "MMMM Do, YYYY",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "figure",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Post Excerpt",
      type: "excerptBlockContent",
    },
    {
      name: "body",
      title: "Post Body",
      type: "blockContent",
    },
  ],
}
