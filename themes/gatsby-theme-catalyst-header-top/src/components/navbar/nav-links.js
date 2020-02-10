/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useContext } from "react"
import NavLI from "./nav-li"
import NavMenuLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"

const NavLinksDefault = () => {
  // const { menuLinks } = useSiteMetadata()
  const [isHome] = useContext(HomeContext)

  const menuLinks = [
    {
      name: `Page 1`,
      link: `/page-1`,
      type: `internal`, //internal or anchor
      subMenu: [
        {
          name: `Sub 1`,
          link: `/sub-1`,
          type: `internal`, //internal or anchor
        },
        {
          name: `Sub 2`,
          link: `/sub-2`,
          type: `internal`, //internal or anchor
        },
      ],
    },
  ]

  return (
    <Fragment>
      {menuLinks.map(link => (
        <NavLI key={link.name}>
          {link.type === "internal" && (
            <div>
              <NavMenuLink link={link.link}>{link.name}</NavMenuLink>
              {link.subMenu.map(subLink => (
                <p>{subLink.name}</p>
              ))}
            </div>
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
    </Fragment>
  )
}

export default NavLinksDefault
