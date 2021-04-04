/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

const HomeHeading = ({ children }) => {
  return (
    <Themed.h2
      sx={{
        fontSize: 5,
        mb: 5,
        textAlign: "center",
        "::after": {
          display: "block",
          content: '""',
          width: "40px",
          pt: 2,
          borderBottomStyle: "solid",
          borderBottomWidth: "4px",
          borderBottomColor: "primary",
          mx: "auto",
        },
      }}
    >
      {children}
    </Themed.h2>
  )
}

export default HomeHeading
