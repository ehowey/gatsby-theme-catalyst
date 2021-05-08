/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useEffect, useRef } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import NavMenuRight from "./nav-menu-right"
import NavMenuLeft from "./nav-menu-left"
import SocialIcons from "./social-icons"

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
        width: "100%",
        fontSize: 2,
        gridColumn: ["1 / -1", null, "2 / 3", null, null],
        gridRow: ["2 / 3", null, "1 / 2", null, null],
        justifySelf: ["center", null, "end", null, null],
        alignSelf: ["start", null, "center", null, null],
        alignItems: "center",
        mt: isNavOpen ? 2 : 0,
        display: [isNavOpen ? "flex" : "none", null, "flex", null, null],
        flexDirection: ["column", null, "row", null, null],
        justifyContent: ["start", null, "flex-end", null, null],
        variant: "variant.nav",
      }}
      aria-label="Primary menu"
    >
      <div
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: ["column", null, "row", null, null],
          justifyContent: [null, null, "space-between", null, null],
          flexWrap: "wrap",
          textAlign: ["center", null, "left", null, null],
          variant: "variants.navUl",
        }}
      >
        <NavMenuLeft />
        <NavMenuRight />
      </div>
      <SocialIcons />
    </nav>
  )
}

export default Nav
