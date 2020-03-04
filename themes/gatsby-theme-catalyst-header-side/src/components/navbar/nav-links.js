/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import NavUL from "./nav-ul"
import NavLI from "./nav-li"
import NavMenuLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"
import NavUl from "../../../../gatsby-theme-catalyst-header-top/src/components/navbar/nav-ul"

const NavLinksDefault = () => {
  const { menuLinks } = useSiteMetadata()
  const [isHome] = useContext(HomeContext)

  return (
    <NavUL>
      {menuLinks.map(link => (
        <NavLI key={link.name}>
          {link.type === "internal" && (
            <NavMenuLink link={link.link}>{link.name}</NavMenuLink>
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
