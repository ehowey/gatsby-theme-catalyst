/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const buttonInternal = props => {
  return (
    <Link
      sx={{
        py: 2,
        px: 3,
        bg: "button.background",
        color: "button.text",
        textTransform: "uppercase",
        textDecoration: "none",
        borderRadius: "0.5rem",
        fontSize: "80%",
        transition: "all 0.5s ease",
        ":hover": {
          bg: "button.hover",
        },
      }}
      to={props.to}
    >
      {props.text}
    </Link>
  )
}

export default buttonInternal
