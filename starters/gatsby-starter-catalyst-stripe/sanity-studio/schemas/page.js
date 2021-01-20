export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Page Slug",
      type: "slug",
      description:
        "Used for your pages location in the site, e.g. a slug og 'work' ends up at mysite.com/work. While a slug of projects/awesome ends up at mysite.com/projects/awesome.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Page Content",
      type: "blockContent",
    },
  ],
}
