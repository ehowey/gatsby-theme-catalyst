/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const ButtonInternal = ({ variant = "primary", ...props }) => {
  return (
    <Link
      sx={{
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        fontWeight: "bold",
        m: 0,
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 4,
        transition: "all 0.3s ease 0s",
        variant: `variants.buttons.${variant}`,
        "::after": {
          content: '"\\00A0 \\2192"',
        },
        ":hover": {
          opacity: "0.8",
        },
      }}
      to={props.to}
    >
      {props.text}
    </Link>
  )
}

export default ButtonInternal
