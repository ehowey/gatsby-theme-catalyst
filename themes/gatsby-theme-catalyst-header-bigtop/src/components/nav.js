/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useEffect, useRef } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavMenu from "./nav-menu"

const Nav = () => {
  const [isNavOpen] = useContext(NavContext)
  const navRef = useRef()

  // Handle moving the focus up to the menu when it is opened, esc buttong to close menu
  useEffect(() => {
    const focusableModalElements = navRef.current.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    )
    const firstElement = focusableModalElements[0]

    const handleTab = (e) => {
      e.preventDefault()
      firstElement.focus()
      document.removeEventListener("keydown", tabListener)
    }

    const tabListener = (e) => {
      if (e.keyCode === 9) {
        handleTab(e)
      }
    }
    const escListener = (e) => {
      if (e.keyCode === 27) {
        setIsNavOpen(false)
      }
    }
    if (isNavOpen) {
      document.addEventListener("keydown", tabListener)
      document.addEventListener("keydown", escListener)
    }
    return () => {
      document.removeEventListener("keydown", tabListener)
      document.removeEventListener("keydown", escListener)
    }
  }, [isNavOpen])

  return (
    <nav
      ref={navRef}
      sx={{
        m: 0,
        display: [isNavOpen ? "flex" : "none", null, "flex", null, null],
        justifyContent: "center",
        flexDirection: ["column", null, "row", null, null],
        gridArea: "nav",
        transition: "all 3s ease-in-out",
        variant: "variants.nav",
      }}
      aria-label="Primary menu"
    >
      <NavMenu />
    </nav>
  )
}

export default Nav
