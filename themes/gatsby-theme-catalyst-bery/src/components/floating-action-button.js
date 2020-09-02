/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const Span = ({ open }) => (
  <span
    sx={{
      backgroundColor: "text",
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
        transform: open && "translateY(7px) rotate(45deg)",
      },
      ":nth-of-type(2)": {
        top: "calc(50% - 1px)",
        opacity: open && "0",
      },
      ":nth-of-type(3)": {
        top: "calc(50% + 6px)",
        transform: open && "translateY(-7px) rotate(-45deg)",
      },
    }}
  ></span>
)

const FloatingActionButton = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  return (
    <button
      aria-label="Toggle Navigation Menu"
      onClick={() => setIsNavOpen(!isNavOpen)}
      sx={{
        display: ["block", "none", null, null, null],
        border: "none",
        m: 0,
        p: 0,
        width: "50px",
        height: "50px",
        backgroundColor: "primary",
        borderRadius: "9999em",
        boxShadow: "0 2px 4px 0 #666",
        transition: "all 0.1s ease-in-out",
        color: "text",
        textAlign: "center",
        position: "fixed",
        right: "32px",
        bottom: "32px",
        zIndex: "100",
        fontSize: "28px",
        lineHeight: "28px",
      }}
    >
      <Span open={isNavOpen} />
      <Span open={isNavOpen} />
      <Span open={isNavOpen} />
    </button>
  )
}

export default FloatingActionButton
