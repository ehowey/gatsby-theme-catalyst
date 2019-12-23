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
        px: 0,
        "::after": {
          content: '"\\00A0 \\2192"',
        },
        ":hover": {
          textDecoration: "underline",
        },
      }}
      as={Link}
      to={props.link}
      variant="readmore"
    >
      {props.children}
    </Button>
  )
}

export default Readmore
