export default {
  box: {
    full: {
      width: "100vw",
      position: "relative",
      left: "calc(-50vw + 50%)",
    },
    wide: {
      width: ["100vw", "90vw", "80vw"],
      position: "relative",
      maxWidth: "maxPageWidth",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  buttons: {
    primary: {
      backgroundColor: "primary",
      color: "textWhite",
      mt: 3,
      mb: 3,
    },
    secondary: {
      backgroundColor: "secondary",
      color: "textWhite",
      mt: 3,
      mb: 3,
    },
    large: {
      backgroundColor: "primary",
      color: "textWhite",
      textTransform: "uppercase",
      fontSize: 4,
      px: 4,
      py: 3,
      mt: 3,
      mb: 3,
    },
    small: {
      backgroundColor: "primary",
      color: "textWhite",
      fontSize: 2,
      mt: 2,
      mb: 2,
    },
  },
}
