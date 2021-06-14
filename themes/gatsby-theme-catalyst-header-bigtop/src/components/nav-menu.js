/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useContext, useState } from "react"
import { Link } from "gatsby"
import { useSiteMetadata, NavContext } from "gatsby-theme-catalyst-core"
import DropdownButton from "./dropdown-button"
import DropdownMenu from "./dropdown-menu"

// This component has a lot going on. It is handling the mapping of the menu items, optionally using anchor links, and optionally showing a dropdown menu. It is broken into smaller components for readability here but could be condensed into one mega component if you wanted.

const NavLinks = () => {
  const { menuLinks } = useSiteMetadata()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <ul
      sx={{
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        alignItems: "center",
        flexWrap: "wrap",
        textAlign: ["center", null, "left", null, null],
        listStyle: "none",
        m: 0,
        p: 0,
        variant: "variants.navUl",
      }}
    >
      {menuLinks.map((link) => {
        const hasSubmenu = link.subMenu && link.subMenu.length > 0
        return (
          <li
            key={link.link}
            sx={{
              my: [1, null, 0, null, null],
              mr: [0, null, 3, null, null],
              cursor: "pointer",
              ".active": {
                textDecoration: "underline",
                textDecorationThickness: "0.125em",
                color: "primary",
                variant: "variants.navLinkActive",
              },
              ":last-of-type": {
                mr: 0,
              },
              variant: "variants.navLi",
            }}
          >
            {!hasSubmenu && (
              <Link
                to={link.link}
                activeClassName="active"
                onClick={() => setIsNavOpen(false)}
                sx={{
                  position: "relative",
                  py: 2,
                  px: 1,
                  color: isNavOpen ? "header.textOpen" : "header.text",
                  textDecoration: "none",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  zIndex: 2,
                  ":hover, :focus, :active": {
                    textDecoration: "underline",
                    textDecorationThickness: "0.125em",
                    color: "primary",
                  },
                  variant: "variants.navLink",
                }}
              >
                {link.name}
              </Link>
            )}
            {hasSubmenu && (
              <Fragment>
                <DropdownButton
                  link={link.link}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                >
                  {link.name}
                </DropdownButton>
                {activeDropdown === link.link && (
                  <DropdownMenu
                    link={link}
                    setActiveDropdown={setActiveDropdown}
                    activeDropdown={activeDropdown}
                  />
                )}
              </Fragment>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
