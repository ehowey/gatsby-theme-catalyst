/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavLinksDefault from "./navLinks-default"
import NavLinksAnchor from "./navLinks-anchor"
import NavLinksBlended from "./navLinks-blended"
import SocialLinks from "../social/socialLinks"
import SocialHeaderIcons from "../social/socialHeaderIcons"
import { useContext } from "react"
import { NavContext } from "../contexts/navContext"
import { MobileContext } from "../contexts/mobileContext"

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
  const [mobile] = useContext(MobileContext)
  return (
    <nav
      sx={{
        gridColumn: mobile ? "1 / -1" : "2 / 3",
        gridRow: mobile ? "2 / 3" : "1 / 2",
        justifySelf: mobile ? "center" : "end",
        alignSelf: mobile ? "start" : "center",
        alignItems: "center",
        mt: open ? 2 : 0,
        display: mobile ? (open ? "flex" : "none") : "flex",
        flexDirection: mobile ? "column" : "row",
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
