/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import NavUL from "./nav-ul"
import NavLI from "./nav-li"
import NavMenuLink from "./nav-links-gatsbylink"

const NavLinksDefault = () => {
  return (
    <NavUL>
      <NavLI>
        <NavMenuLink link="/docs/getting-started">Getting Started</NavMenuLink>
      </NavLI>
      <NavLI>
        <NavMenuLink link="/">Accessibility</NavMenuLink>
      </NavLI>
      <NavLI>
        <NavMenuLink link="/">Configuring Themes</NavMenuLink>
      </NavLI>
      <NavLI>
        <NavMenuLink link="/">Layout Themes</NavMenuLink>
        <ul sx={{ m: 0, p: 0, ml: 2, listStyle: "none", fontSize: 1 }}>
          <li>
            <NavMenuLink link="/">gatsby-theme-catalyst-core</NavMenuLink>
          </li>
          <li>
            <NavMenuLink link="/">gatsby-theme-catalyst-header-top</NavMenuLink>
          </li>
        </ul>
      </NavLI>
      <NavLI>
        <NavMenuLink link="/">Data Themes</NavMenuLink>
      </NavLI>
      <NavLI>
        <NavMenuLink link="/">Presentation Themes</NavMenuLink>
      </NavLI>
    </NavUL>
  )
}

export default NavLinksDefault
