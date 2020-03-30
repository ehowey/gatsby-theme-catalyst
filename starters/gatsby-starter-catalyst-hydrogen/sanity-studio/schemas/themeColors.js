export default {
  name: "themeColors",
  title: "Theme Colors",
  type: "object",
  fields: [
    {
      name: "background",
      title: "Background Color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "text",
      title: "Text Color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "primary",
      title: "Primary Color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "secondary",
      title: "Secondary Color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "accent",
      title: "Accent Color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "highlight",
      title: "Highlight Color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      name: "muted",
      title: "Muted Color",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      title: "Header Colors",
      name: "headerColors",
      description: "Sets colors for the header.",
      type: "headerColors",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: "Footer Colors",
      name: "footerColors",
      description: "Sets colors for the footer.",
      type: "footerColors",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
}
