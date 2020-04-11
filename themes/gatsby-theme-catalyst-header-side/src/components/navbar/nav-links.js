/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, Fragment } from "react"
import NavUL from "./nav-ul"
import NavUlDropdown from "./nav-ul-submenu"
import NavLI from "./nav-li"
import NavLiDropdown from "./nav-li-submenu"
import NavMenuLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"

const NavLinksDefault = () => {
  const { menuLinks } = useSiteMetadata()
  const [isHome] = useContext(HomeContext)

  return (
    <NavUL>
      {menuLinks.map((link) => (
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
                  {link.subMenu.map((subLink) => (
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
