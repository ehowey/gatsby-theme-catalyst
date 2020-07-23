export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "This defines the projects link on your website relative to the project path set in theme options via Gatsby. For example a slug of 'wicked-awesome' would end up at mysite.com/projects/wicked-awesome' by default.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      description: "A featured image for your project.",
      type: "figure",
    },
    {
      name: "excerpt",
      title: "Project Excerpt",
      description:
        "Used to show a summary of your project in the projects index page.",
      type: "excerptBlockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Project Content",
      type: "blockContent",
    },
  ],
}
