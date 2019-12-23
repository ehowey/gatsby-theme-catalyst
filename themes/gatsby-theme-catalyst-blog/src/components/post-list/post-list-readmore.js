/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "@theme-ui/components"

const Readmore = props => {
  return (
    <Button
      sx={{
        color: "text",
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
      to={props.link}
    >
      {props.children}
    </Button>
  )
}

export default Readmore
