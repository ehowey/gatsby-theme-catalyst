/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useContext, useState } from "react"
import { Link } from "gatsby"
import NavUL from "./nav-ul"
import NavLI from "./nav-li"
import NavUlDropdown from "./nav-ul-submenu"
import NavLiDropdown from "./nav-li-submenu"
import DropdownButton from "./nav-links-dropdown-button"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"

// This component has a lot going on. It is handling the mapping of the menu items, optionally using anchor links, and optionally showing a dropdown menu. It is broken into smaller components for readability here but could be condensed into one mega component if you wanted.

const NavLinksDefault = () => {
  const { menuLinks } = useSiteMetadata()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isNavOpen, setIsNavOpen] = useContext(NavContext) // eslint-disable-line

  return (
    <NavUL>
      {menuLinks.map((link) => {
        const hasSubmenu = link.subMenu && link.subMenu.length > 0
        return (
          <NavLI key={link.name} hasSubmenu={hasSubmenu ? true : false}>
            <Fragment>
              {hasSubmenu ? (
                <Fragment>
                  <DropdownButton
                    link={link.link}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  >
                    {link.name}
                  </DropdownButton>
                  {activeDropdown === link.link && (
                    <NavUlDropdown
                      setActiveDropdown={setActiveDropdown}
                      activeDropdown={activeDropdown}
                      link={link.link}
                    >
                      {link.subMenu.map((subLink) => (
                        <NavLiDropdown key={subLink.name}>
                          <Link
                            to={subLink.link}
                            activeClassName="active"
                            onClick={() => setIsNavOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        </NavLiDropdown>
                      ))}
                    </NavUlDropdown>
                  )}
                </Fragment>
              ) : (
                <Link
                  to={link.link}
                  activeClassName="active"
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </Fragment>
          </NavLI>
        )
      })}
    </NavUL>
  )
}

export default NavLinksDefault
