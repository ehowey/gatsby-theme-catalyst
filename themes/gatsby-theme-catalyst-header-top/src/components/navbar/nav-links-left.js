/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useContext, useState } from "react"
import NavLI from "./nav-li"
import NavUlDropdown from "./nav-ul-submenu"
import NavLiDropdown from "./nav-li-submenu"
import GatsbyLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"
import DropdownButton from "./nav-links-dropdown-button"
import { useSiteMetadata, HomeContext } from "gatsby-theme-catalyst-core"

// This component has a lot going on. It is handling the mapping of the menu items, optionally using anchor links, and optionally showing a dropdown menu. It is broken into smaller components for readability here but could be condensed into one mega component if you wanted.

const NavLinksLeft = () => {
  const { menuLinks } = useSiteMetadata()
  const leftLinks = menuLinks.filter((link) => link.location === "left")
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isHome] = useContext(HomeContext)
  return (
    <ul
      sx={{
        listStyle: "none",
        m: 0,
        p: 0,
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        alignItems: "center",
        flexWrap: "wrap",
        variant: "variants.navLinksLeft",
      }}
    >
      {leftLinks.map((link) => {
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
    </ul>
  )
}

export default NavLinksLeft
