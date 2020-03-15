/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const ButtonSecondary = ({ to, children }) => {
  return (
    <Link
      sx={{
        appearance: "none",
        width: "auto",
        backgroundColor: "transparent",
        color: "primary",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: 2,
        m: 0,
        px: 2,
        py: 1,
        borderColor: "primary",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "4px",
        letterSpacing: "1px",
        transition: "all 0.3s ease 0s",
        "::after": {
          content: '"\\00A0 \\2192"',
        },
        ":hover": {
          borderColor: "secondary",
          color: "secondary",
        },
      }}
      to={to}
    >
      {children}
    </Link>
  )
}

export default ButtonSecondary
