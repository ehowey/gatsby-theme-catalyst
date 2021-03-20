/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { useSiteMetadata, NavContext } from "gatsby-theme-catalyst-core"

// This component has a lot going on. It is handling the mapping of the menu items, optionally using anchor links, and optionally showing a dropdown menu. It is broken into smaller components for readability here but could be condensed into one mega component if you wanted.

const DropdownMenu = ({ activeDropdown, setActiveDropdown, link }) => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line
  const dropdownRef = useRef(null)
  const isActive = activeDropdown === link.link

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
      {link.subMenu.map((subLink) => (
        <li
          key={subLink.name}
          sx={{
            display: "block",
            mb: isNavOpen ? 1 : 3,
            ":hover": {
              cursor: "pointer",
            },
            a: {
              fontSize: isNavOpen ? 1 : 2,
              color: isNavOpen ? "header.textOpen" : "header.text",
              ":hover, :focus, :active": {
                textDecoration: "underline",
                color: "primary",
                textDecorationThickness: "0.125em",
              },
              variant: "variants.navLinkSub",
            },
            ".active": {
              textDecoration: "underline",
              textDecorationThickness: "0.125em",
              color: "primary",
              variant: "variants.navLinkSubActive",
            },
            variant: "variants.navLiSub",
          }}
        >
          <Link
            to={subLink.link}
            activeClassName="active"
            onClick={() => setIsNavOpen(false)}
          >
            {subLink.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu
