/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "@theme-ui/components"

const Readmore = ({ link, children }) => {
  return (
    <Button
      sx={{
        color: "primary",
        fontWeight: "bold",
        bg: "transparent",
        border: "none",
        px: 0,
        "::after": {
          content: '"\\00A0 \\2192"',
        },
        ":hover": {
          textDecoration: "underline",
          bg: "transparent",
          border: "none",
        },
        variant: "variants.postListReadmore",
      }}
      as={Link}
      to={link}
      variant="readmore"
    >
      {children}
    </Button>
  )
}

export default Readmore
