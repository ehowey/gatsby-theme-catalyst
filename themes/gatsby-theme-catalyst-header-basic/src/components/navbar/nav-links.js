/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useContext } from "react"
import NavLI from "./nav-li"
import NavMenuLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"

const NavLinksDefault = () => {
  const { menuLinks } = useSiteMetadata()
  const [isHome] = useContext(HomeContext)

  return (
    <Fragment>
      {menuLinks.map(link => (
        <NavLI key={link.name}>
          {link.type === "internal" && (
            <NavMenuLink to={link.link} text={link.name} />
          )}
          {isHome && link.type === "anchor" ? (
            <NavMenuAnchorLink to={link.link} text={link.name} />
          ) : (
            link.type === "anchor" && (
              <NavMenuLink to={"/" + link.link} text={link.name} />
            )
          )}
        </NavLI>
      ))}
    </Fragment>
  )
}

export default NavLinksDefault
