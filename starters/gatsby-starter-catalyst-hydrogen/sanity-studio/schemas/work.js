export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "date",
      title: "Publication Date",
      type: "date",
      options: {
        dateFormat: "MMMM Do, YYYY",
      },
      validation: Rule => Rule.required(),
    },
    {
      name: "publisher",
      title: "Publisher",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: Rule => Rule.required(),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "categories" } }],
      validation: Rule => Rule.required(),
    },
    {
      title: "Include in selected published work?",
      name: "include",
      type: "boolean",
    },
    {
      title: "Featured on front page?",
      description: "Remember to set an excerpt and image.",
      name: "featured",
      type: "boolean",
    },
    {
      title: "Excerpt",
      description: "Only required if displayed on front page.",
      name: "excerpt",
      type: "text",
      rows: 4,
    },
    {
      title: "Image",
      description: "Only required if displayed on front page.",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      publisher: "publisher",
    },
    prepare(selection) {
      const { title, publisher, date } = selection
      return {
        title: title,
        subtitle: publisher,
        subtitle: date,
      }
    },
  },
}
