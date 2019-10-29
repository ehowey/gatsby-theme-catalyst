/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavMenuBar from "./nav-links-menubar"
import NavMenuLink from "./nav-links-gatsbylink"

const NavLinksDefault = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pageLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <NavMenuBar>
      {data.site.siteMetadata.pageLinks.map(link => (
        <NavMenuLink to={link.link} text={link.name} key={link.name} />
      ))}
    </NavMenuBar>
  )
}

export default NavLinksDefault
