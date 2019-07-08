/** @jsx jsx */
import { jsx } from "theme-ui"

const Span = props => (
  <span
    sx={{
      backgroundColor: "currentColor",
      display: "block",
      height: "1px",
      left: "calc(50% - 8px)",
      position: "absolute",
      transformOrigin: "center",
      transitionDuration: "86ms",
      transitionProperty: "background-color, opacity, transform",
      transitionTimingFunction: "ease-out",
      width: "16px",

      ":nth-of-type(1)": {
        top: "calc(50% - 6px)",
        transform: props.open && "translateY(5px) rotate(45deg)",
      },
      ":nth-of-type(2)": {
        top: "calc(50% - 1px)",
        opacity: props.open && "0",
      },
      ":nth-of-type(3)": {
        top: "calc(50% + 4px)",
        transform: props.open && "translateY(-5px) rotate(-45deg)",
      },
    }}
  ></span>
)

const siteMobileButton = props => {
  return (
    <button
      aria-label="Menu"
      onClick={props.action}
      {...props}
      sx={{
        gridColumn: "2 / 3",
        gridRow: "1 / 2",
        alignSelf: "center",
        color: props.open ? "header.textOpen" : "header.text",
        cursor: "pointer",
        display: ["block", "none", null],
        height: "2rem",
        position: "relative",
        width: "2rem",
        marginLeft: "auto",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <Span {...props} />
      <Span {...props} />
      <Span {...props} />
    </button>
  )
}

export default siteMobileButton
