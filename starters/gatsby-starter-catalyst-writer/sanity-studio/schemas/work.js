export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "date",
      title: "Publication Date",
      type: "date",
      options: {
        dateFormat: "MMMM Do, YYYY"
      }
    },
    {
      name: "publisher",
      title: "Publisher",
      type: "string"
    },
    {
      name: "link",
      title: "Link",
      type: "url"
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "categories" } }]
    },
    {
      title: "Include in selected published work?",
      name: "include",
      type: "boolean"
    },
    {
      title: "Featured on front page?",
      name: "featured",
      type: "boolean"
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "text",
      rows: 4
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true // <-- Defaults to false
      }
    }
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      publisher: "publisher"
    },
    prepare(selection) {
      const { title, publisher, date } = selection;
      return {
        title: title,
        subtitle: publisher,
        subtitle: date
      };
    }
  }
};
