/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useContext } from "react"
import NavUL from "./nav-ul"
import NavLI from "./nav-li"
import NavUlDropdown from "./nav-ul-submenu"
import NavLiDropdown from "./nav-li-submenu"
import NavMenuLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"

// This component has a lot going on. It is handling the mapping of the menu items, optionally using anchor links, and optionally showing a dropdown menu. It is broken into smaller components for readability here but could be condensed into one mega component if you wanted.

const NavLinksDefault = () => {
  const { menuLinks } = useSiteMetadata()
  const [isHome] = useContext(HomeContext)
  return (
    <NavUL>
      {menuLinks.map(link => (
        <NavLI
          key={link.name}
          hasSubmenu={link.subMenu && link.subMenu.length > 0 ? true : false}
        >
          {link.type === "internal" && (
            <Fragment>
              <NavMenuLink
                link={link.link}
                hasSubmenu={
                  link.subMenu && link.subMenu.length > 0 ? true : false
                }
              >
                {link.name}
              </NavMenuLink>
              {link.subMenu && link.subMenu.length > 0 ? (
                <NavUlDropdown>
                  {link.subMenu.map(subLink => (
                    <NavLiDropdown key={subLink.name}>
                      <NavMenuLink link={subLink.link}>
                        {subLink.name}
                      </NavMenuLink>
                    </NavLiDropdown>
                  ))}
                </NavUlDropdown>
              ) : null}
            </Fragment>
          )}
          {isHome && link.type === "anchor" ? (
            <NavMenuAnchorLink link={link.link}>{link.name}</NavMenuAnchorLink>
          ) : (
            link.type === "anchor" && (
              <NavMenuLink link={"/" + link.link}>{link.name}</NavMenuLink>
            )
          )}
        </NavLI>
      ))}
    </NavUL>
  )
}

export default NavLinksDefault
