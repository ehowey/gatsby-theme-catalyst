export default {
  name: "socialLinks",
  type: "document",
  title: "All Social Links",
  fields: [
    {
      title: "Header social links",
      name: "headerSocialLinks",
      description: "Social links that appear in the header of your webpage.",
      type: "array",
      of: [{ type: "socialLink" }],
    },
    {
      title: "Footer social links",
      name: "footerSocialLinks",
      description: "Social links that appear in the footer of your webpage.",
      type: "array",
      of: [{ type: "socialLink" }],
    },
  ],
}
