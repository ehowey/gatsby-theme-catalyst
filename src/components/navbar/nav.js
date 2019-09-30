/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavLinksDefault from "./navLinks-default"
import NavLinksAnchor from "./navLinks-anchor"
import NavLinksBlended from "./navLinks-blended"
import SocialLinks from "../social/socialLinks"
import SocialHeaderIcons from "../social/socialHeaderIcons"
import { useContext } from "react"
import { NavContext } from "./navContext"

const NavLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      catalystConfig {
        navType
      }
    }
  `)
  if (data.catalystConfig.navType === "default") {
    return <NavLinksDefault />
  } else if (data.catalystConfig.navType === "anchor") {
    return <NavLinksAnchor />
  } else if (data.catalystConfig.navType === "blended") {
    return <NavLinksBlended />
  } else {
    return null
  }
}

const SiteNav = () => {
  const [open] = useContext(NavContext)
  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", "2 / 3", "2 / 3"],
        gridRow: ["2 / 3", "1 / 2", "1 / 2"],
        justifySelf: ["center", "end", "end"],
        alignSelf: ["start", "center", null],
        alignItems: "center",
        mt: [open ? 2 : 0, 0, null],
        display: [open ? "flex" : "none", "flex", null],
        flexDirection: ["column", "row", null],
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <NavLinks />
      <SocialLinks>
        <SocialHeaderIcons />
      </SocialLinks>
    </nav>
  )
}

export default SiteNav
