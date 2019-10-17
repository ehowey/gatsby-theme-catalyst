/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import NavLayout from "./nav-layout"
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
    <NavLayout>
      <NavLinks />
      <SocialWrapper>
        <SocialHeaderIcons />
      </SocialWrapper>
    </NavLayout>
  )
}

export default SiteNav
