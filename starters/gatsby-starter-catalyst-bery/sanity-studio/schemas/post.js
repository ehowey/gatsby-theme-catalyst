export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Post Slug",
      description:
        "This defines the posts link on your website relative to the post path set in theme options via Gatsby. For example a slug of 'wicked-awesome' would end up at mysite.com/posts/wicked-awesome' by default.",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "category",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      description: "A featured image for your post.",
      type: "figure",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Post Content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      featuredImage: "featuredImage",
    },
    prepare(selection) {
      const { title, date, featuredImage } = selection
      const formattedDate = new Date(date).toDateString()
      return {
        title: title,
        subtitle: formattedDate,
        media: featuredImage,
      }
    },
  },
  orderings: [
    {
      title: "Publish Date Desc",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Publish Date Asc",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
}
