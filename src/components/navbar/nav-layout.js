/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavWrapper from "./nav-wrapper"
import NavLinksDefault from "./navlinks-default"
import NavLinksAnchor from "./navlinks-anchor"
import NavLinksBlended from "./navlinks-blended"
import SocialWrapper from "./social-wrapper"
import SocialHeaderIcons from "../social/social-header-icons"

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
  return (
    <NavWrapper>
      <NavLinks />
      <SocialWrapper>
        <SocialHeaderIcons />
      </SocialWrapper>
    </NavWrapper>
  )
}

export default SiteNav
