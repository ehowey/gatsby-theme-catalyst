export default {
  name: "mainNav",
  type: "document",
  title: "Main Navigation",
  fields: [
    {
      title: "Default navigation links",
      name: "mainNavRight",
      description:
        "Top level navigation items that appears in the main nav area of the site on the far right hand side of the header. This is the default link location for gatsby-theme-catalyst-header-bigtop, and gatsby-theme-catalyst-header-side",
      type: "array",
      of: [{ type: "menuLink" }],
    },
    {
      title: "Left justified links",
      name: "mainNavLeft",
      description:
        "This is only supported in gatsby-theme-catalyst-header-top. Appear on the left hand side of the header beside the logo and site name. ",
      type: "array",
      of: [{ type: "menuLink" }],
    },
  ],
}
