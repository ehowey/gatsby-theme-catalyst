/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useEffect, useRef } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavMenu from "./nav-menu"
import SocialIcons from "./social-icons"

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
