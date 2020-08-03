/** @jsx jsx */
import { jsx } from "theme-ui"
import NavUL from "./nav-ul"
import NavLI from "./nav-li"
import NavMenuLink from "./nav-links-gatsbylink"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

// This component has a lot going on. It is handling the mapping of the menu items, optionally using anchor links, and optionally showing a dropdown menu. It is broken into smaller components for readability here but could be condensed into one mega component if you wanted.

const NavLinksDefault = () => {
  const { menuLinks } = useSiteMetadata()
  console.log(menuLinks)
  return (
    <NavUL>
      {menuLinks.map((link) => (
        <NavLI key={link.name}>
          <NavMenuLink link={link.link}>{link.name}</NavMenuLink>
        </NavLI>
      ))}
    </NavUL>
  )
}

export default NavLinksDefault
