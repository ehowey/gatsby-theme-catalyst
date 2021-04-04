/** @jsx jsx */
import { jsx, useColorMode as useThemeUIColorMode } from "theme-ui"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { lightness } from "@theme-ui/color"

const Span = ({ open }) => {
  const [mode] = useThemeUIColorMode()
  const isDark = mode === "dark"
  return (
    <span
      sx={{
        backgroundColor: isDark ? lightness("text", 0) : lightness("text", 1),
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
}

const FloatingActionButton = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  return (
    <button
      aria-label="Toggle Menu"
      onClick={() => setIsNavOpen(!isNavOpen)}
      sx={{
        display: ["block", "none", null, null, null],
        border: "none",
        m: 0,
        p: 0,
        width: "48px",
        height: "48px",
        backgroundColor: "primary",
        borderRadius: "50%",
        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        transition: "all 0.1s ease-in-out",
        textAlign: "center",
        position: "fixed",
        right: "16px",
        bottom: "16px",
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
