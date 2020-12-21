export default {
  name: "theme",
  title: "Theme-UI",
  type: "document",
  fields: [
    {
      title: "Colors",
      name: "colors",
      description:
        "Select and overide colors for the default color mode. Dark mode is not supported with SANITY.io",
      type: "themeColors",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
}
