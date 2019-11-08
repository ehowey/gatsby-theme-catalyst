/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavMenuBar from "./nav-links-menubar"
import NavMenuLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"
import { HomeContext } from "gatsby-theme-catalyst-core"

const NavLinksBlended = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pageLinks {
            name
            link
          }
          anchorLinks {
            name
            link
          }
        }
      }
    }
  `)

  const [isHome] = useContext(HomeContext)

  if (isHome) {
    return (
      <NavMenuBar>
        {data.site.siteMetadata.anchorLinks.map(link => (
          <NavMenuAnchorLink to={link.link} text={link.name} key={link.name} />
        ))}
        {data.site.siteMetadata.pageLinks.map(link => (
          <NavMenuLink to={link.link} text={link.name} key={link.name} />
        ))}
      </NavMenuBar>
    )
  } else {
    return (
      <NavMenuBar>
        {data.site.siteMetadata.anchorLinks.map(link => (
          <NavMenuLink to={"/" + link.link} text={link.name} key={link.name} />
        ))}
        {data.site.siteMetadata.pageLinks.map(link => (
          <NavMenuLink to={link.link} text={link.name} key={link.name} />
        ))}
      </NavMenuBar>
    )
  }
}

export default NavLinksBlended
