/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, Fragment, useState } from "react"
import NavUL from "./nav-ul"
import NavUlDropdown from "./nav-ul-submenu"
import NavLI from "./nav-li"
import NavLiDropdown from "./nav-li-submenu"
import GatsbyLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"
import DropdownButton from "./nav-links-dropdown-button"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"

const NavLinksDefault = () => {
  const { menuLinks } = useSiteMetadata()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isHome] = useContext(HomeContext)

  return (
    <NavUL>
      {menuLinks.map((link) => {
        const hasSubmenu = link.subMenu && link.subMenu.length > 0
        return (
          <NavLI key={link.name} hasSubmenu={hasSubmenu ? true : false}>
            {link.type === "internal" && (
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
                            <GatsbyLink link={subLink.link}>
                              {subLink.name}
                            </GatsbyLink>
                          </NavLiDropdown>
                        ))}
                      </NavUlDropdown>
                    )}
                  </Fragment>
                ) : (
                  <GatsbyLink
                    link={link.link}
                    hasSubmenu={hasSubmenu ? true : false}
                  >
                    {link.name}
                  </GatsbyLink>
                )}
              </Fragment>
            )}
            {isHome && link.type === "anchor" ? (
              <NavMenuAnchorLink link={link.link}>
                {link.name}
              </NavMenuAnchorLink>
            ) : (
              link.type === "anchor" && (
                <GatsbyLink link={"/" + link.link}>{link.name}</GatsbyLink>
              )
            )}
          </NavLI>
        )
      })}
    </NavUL>
  )
}

export default NavLinksDefault
