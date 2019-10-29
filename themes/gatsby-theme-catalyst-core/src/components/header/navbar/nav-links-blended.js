/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavMenuBar from "./nav-links-menubar"
import NavMenuLink from "./nav-links-gatsbylink"
import NavMenuAnchorLink from "./nav-links-anchorlink"

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

  if (typeof window !== "undefined") {
    var is_root = window.location.pathname === "/" //Equals true if we're at the root
  }

  if (is_root) {
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
