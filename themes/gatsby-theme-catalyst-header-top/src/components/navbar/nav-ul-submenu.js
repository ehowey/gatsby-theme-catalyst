/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useRef, useEffect } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"

const NavUlDropdown = ({
  children,
  activeDropdown,
  setActiveDropdown,
  link,
}) => {
  const [isNavOpen] = useContext(NavContext)
  const dropdownRef = useRef(null)
  const isActive = activeDropdown === link

  //Hand clicks outside of the button/ul
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setActiveDropdown(null)
      }
    }

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent)
    }

    return () => {
      window.removeEventListener("click", pageClickEvent)
    }
  }, [isActive]) //eslint-disable-line

  return (
    <ul
      ref={dropdownRef}
      sx={{
        position: isNavOpen ? "static" : "absolute",
        m: 0,
        p: 0,
        pt: isNavOpen ? 1 : 3,
        px: 2,
        listStyle: "none",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
        transition: "all 0.5s ease",
        zIndex: 1,
        minWidth: "8rem",
        variant: "variants.navUlSub",
      }}
      aria-label="Submenu"
    >
      {children}
    </ul>
  )
}

export default NavUlDropdown
