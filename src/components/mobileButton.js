/** @jsx jsx */
import { jsx } from "theme-ui"

const Span = props => (
  <span
    sx={{
      backgroundColor: "currentColor",
      display: "block",
      height: "1px",
      left: "calc(50% - 10px)",
      position: "absolute",
      transformOrigin: "center",
      transitionDuration: "86ms",
      transitionProperty: "background-color, opacity, transform",
      transitionTimingFunction: "ease-out",
      width: "20px",

      ":nth-of-type(1)": {
        top: "calc(50% - 8px)",
        transform: props.open && "translateY(7px) rotate(45deg)",
      },
      ":nth-of-type(2)": {
        top: "calc(50% - 1px)",
        opacity: props.open && "0",
      },
      ":nth-of-type(3)": {
        top: "calc(50% + 6px)",
        transform: props.open && "translateY(-7px) rotate(-45deg)",
      },
    }}
  ></span>
)

const siteMobileButton = props => {
  return (
    <button
      aria-label="Menu"
      onClick={e => {
        props.action(e)
      }}
      sx={{
        gridColumn: "2 / 3",
        gridRow: "1 / 2",
        alignSelf: "center",
        color: props.open ? "header.textOpen" : "header.text",
        cursor: "pointer",
        display: ["block", "none", null],
        height: "3.5rem",
        position: "relative",
        width: "3.5rem",
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
