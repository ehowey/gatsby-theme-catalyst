/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useContext } from "react"
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
  const rightLinks = menuLinks.filter((link) => link.location !== "left")
  const [isHome] = useContext(HomeContext)
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        flexWrap: "wrap",
        textAlign: ["center", null, "left", null, null],
      }}
    >
      {rightLinks.map((link) => {
        const hasSubmenu = link.subMenu && link.subMenu.length > 0
        return (
          <NavLI key={link.name} hasSubmenu={hasSubmenu ? true : false}>
            {link.type === "internal" && (
              <Fragment>
                <NavMenuLink
                  link={link.link}
                  hasSubmenu={hasSubmenu ? true : false}
                >
                  {link.name}
                </NavMenuLink>
                {hasSubmenu ? (
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
              <NavMenuAnchorLink link={link.link}>
                {link.name}
              </NavMenuAnchorLink>
            ) : (
              link.type === "anchor" && (
                <NavMenuLink link={"/" + link.link}>{link.name}</NavMenuLink>
              )
            )}
          </NavLI>
        )
      })}
    </div>
  )
}

export default NavLinksDefault
