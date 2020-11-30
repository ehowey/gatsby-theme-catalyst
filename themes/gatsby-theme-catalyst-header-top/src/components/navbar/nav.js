/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useEffect, useRef } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavUL from "./nav-ul"
import NavLinksLeft from "./nav-links-left"
import NavLinksRight from "./nav-links-right"
import NavIcons from "./nav-icons"

const Nav = () => {
  const [isNavOpen] = useContext(NavContext)
  const navRef = useRef()

  // Handle moving the focus up to the menu when it is opened
  useEffect(() => {
    const focusableModalElements = navRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )
    const firstElement = focusableModalElements[0]

    const handleTab = (e) => {
      e.preventDefault()
      firstElement.focus()
      document.removeEventListener("keydown", keyListener)
    }

    const keyListener = (e) => {
      if (e.keyCode === 9) {
        handleTab(e)
      }
    }
    if (isNavOpen) {
      document.addEventListener("keydown", keyListener)
    }
    return () => document.removeEventListener("keydown", keyListener)
  }, [isNavOpen])

  return (
    <nav
      ref={navRef}
      sx={{
        width: "100%",
        gridColumn: ["1 / -1", null, "2 / 3", null, null],
        gridRow: ["2 / 3", null, "1 / 2", null, null],
        justifySelf: ["center", null, "end", null, null],
        alignSelf: ["start", null, "center", null, null],
        alignItems: "center",
        mt: isNavOpen ? 2 : 0,
        display: [isNavOpen ? "flex" : "none", null, "flex", null, null],
        flexDirection: ["column", null, "row", null, null],
        justifyContent: "flex-end",
        variant: "variant.nav",
      }}
      aria-label="Primary menu"
    >
      <NavUL>
        <NavLinksLeft />
        <NavLinksRight />
      </NavUL>
      <NavIcons />
    </nav>
  )
}

export default Nav
